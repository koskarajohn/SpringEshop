package springeshop.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriComponentsBuilder;

import springeshop.model.Product;
import springeshop.model.ProductImage;
import springeshop.service.AmazonS3ClientService;
import springeshop.service.CategoryService;
import springeshop.service.ProductImageService;
import springeshop.service.ProductService;
import springeshop.util.Constants;
import springeshop.util.ErrorMessage;

@RestController
@RequestMapping("/api")
public class ProductApiController {

	public static final Logger logger = LoggerFactory.getLogger(CategoryApiController.class);
	
	@Autowired
	private ProductService productService;
	
	@Autowired
	CategoryService categoryService;
	
	@Autowired
	private ProductImageService productImageService;
	
	@Autowired
    private AmazonS3ClientService amazonS3ClientService;
	
	@RequestMapping(value = "/products", method = RequestMethod.GET)
	public ResponseEntity<?> listProducts(@RequestParam(value = "filter", required = false) String filter){
		List<Product> products = productService.findAllProducts();
		if(products.isEmpty()){
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		}
		
		for(Product product : products){
			ProductImage productImage = productService.findByProductId(product.getId());
	        product.setSmallImageUrl(productImage.getSmallImageurl());
	        product.setLargeImageUrl(productImage.getLargeImageurl());
		}
		
		if(filter == null){
			return new ResponseEntity<List<Product>>(products, HttpStatus.OK);
		}else if(filter.equals("favorite")){
			
			List<List<Product>> listOfFourProductSublists = new ArrayList<>();
			int sublistsNumber = getListsOfFour(products.size());
			for(int i=0; i < sublistsNumber; i++){
				listOfFourProductSublists.add(new ArrayList<Product>());
			}
			
			for(int i=1; i <=products.size(); i++){
				listOfFourProductSublists.get(getListsOfFour(i) - 1).add(products.get(i - 1));			
			}
			
			return new ResponseEntity<List<List<Product>>>(listOfFourProductSublists, HttpStatus.OK);
		}else 
			return new ResponseEntity(HttpStatus.BAD_REQUEST);
		
		
	}
	
	private int getListsOfFour(int numberOfProducts){
		return (int) Math.ceil(numberOfProducts / 4.0);
	}
	
	@RequestMapping(value = "/products/{name}", method = RequestMethod.GET)
	public ResponseEntity<?> getProductByName(@PathVariable("name") String name){
		logger.info("Fetching Product with name {}", name);
        Product product = productService.findByName(name);
        
        if(product == null){
        	logger.error("Product with name {} not found.", name);
			return new ResponseEntity(new ErrorMessage("Product with name " + name + " not found"),HttpStatus.NOT_FOUND);
        }
        
        ProductImage productImage = productService.findByProductId(product.getId());
        product.setSmallImageUrl(productImage.getSmallImageurl());
        product.setLargeImageUrl(productImage.getLargeImageurl());
        
        return new ResponseEntity<Product>(product, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/products", method = RequestMethod.POST, consumes = {"multipart/form-data"})
	public ResponseEntity<?> createProduct(@Valid @RequestPart(value = "product") Product product, @RequestPart (value = "smallImage") MultipartFile smallImage, 
    		@RequestPart(value = "largeImage") MultipartFile largeImage , UriComponentsBuilder ucBuilder) throws InterruptedException, ExecutionException{
		
		logger.info("Creating Product : {}", product);
		
		if(productService.doesProductExist(product)){
			logger.error("Unable to create. A Product with name {} already exist", product.getName());
			return new ResponseEntity(new ErrorMessage("Unable to create. A  Product with name " + product.getName() + " already exist."), HttpStatus.CONFLICT);
		}
		
		if(!categoryService.doesCategoryExist(product.getCategory())){
			logger.error("Unable to create. Category with name {} does not  exist", product.getCategory().getName());
			return new ResponseEntity(new ErrorMessage("Unable to create. Category with name {} does not  exist"), HttpStatus.BAD_REQUEST);
		}
		
		product.getCategory().setId(categoryService.findByName(product.getCategory().getName()).getId());
		productService.saveProduct(product);
		
		if(product.getId() == 0) return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		
		CompletableFuture<Boolean> smallImageUploadFuture = this.amazonS3ClientService
				                                                .uploadImage(smallImage, getCategoryNameWithFirstLetterCapital(product.getCategory().getName()), true);
        CompletableFuture<Boolean> largeImageUploadFuture = this.amazonS3ClientService
        		                                                .uploadImage(largeImage, getCategoryNameWithFirstLetterCapital(product.getCategory().getName()), false);
        boolean isSmallImageUploadSuccess = smallImageUploadFuture.get().booleanValue();
        boolean isLargeImageUploadSuccess = largeImageUploadFuture.get().booleanValue();
        
        if(!(isSmallImageUploadSuccess && isLargeImageUploadSuccess)) {
        	productService.deleteProductById(product.getId());
        	return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
			
		ProductImage productImage = new ProductImage();
		productImage.setProduct(product);
		productImage.setSmallImageurl(Constants.AMAZON_S3_URL + Constants.SMALL_PRODUCTS_PATH
		                                                      + getCategoryNameWithFirstLetterCapital(product.getCategory().getName()) + "/"
		                                                      + smallImage.getOriginalFilename());
		
		productImage.setLargeImageurl(Constants.AMAZON_S3_URL + Constants.LARGE_PRODUCTS_PATH 
                                                              + getCategoryNameWithFirstLetterCapital(product.getCategory().getName()) + "/"
                                                              + largeImage.getOriginalFilename());
		productImageService.saveImage(productImage);
			
		return new ResponseEntity<String>(HttpStatus.CREATED);
		
		
	}
	
	private String getCategoryNameWithFirstLetterCapital(String categoryName){
		return categoryName.substring(0,1).toLowerCase() + categoryName.substring(1);
	}
	
	@RequestMapping(value = "/products/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateProduct(@PathVariable("id") int id, @Valid @RequestBody Product product){
		logger.info("Updating Category with id {}", id);
		
		Product currentProduct = productService.findById(id);
		
		if (currentProduct == null) {
            logger.error("Unable to update. Product with id {} not found.", id);
            return new ResponseEntity(new ErrorMessage("Unable to update. Product with id " + id + " not found."),
                    HttpStatus.NOT_FOUND);
        }
		
		currentProduct.setName(product.getName());
		currentProduct.setCategory(product.getCategory());
		currentProduct.setPrice(product.getPrice());
		currentProduct.setDescription(product.getDescription());
		
		productService.updateProduct(currentProduct);
		return new ResponseEntity<Product>(currentProduct, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/products/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteProduct(@PathVariable("id") int id) {
        logger.info("Fetching & Deleting Product with id {}", id);
 
        Product product = productService.findById(id);
        if (product == null) {
            logger.error("Unable to delete. Product with id {} not found.", id);
            return new ResponseEntity(new ErrorMessage("Unable to delete. Product with id " + id + " not found."),
                    HttpStatus.NOT_FOUND);
        }
        
        productService.deleteProductById(id);
        return new ResponseEntity<Product>(HttpStatus.NO_CONTENT);
    }
	
	//@RequestMapping(value = "/products/{id}", method = RequestMethod.GET)
	//public ResponseEntity<?> getProductById(@PathVariable("id") int id){
	//	logger.info("Fetching Product with id {}", id);
    //    Product product = productService.findById(id);
    //    
     //   if(product == null){
    //    	logger.error("Product with id {} not found.", id);
	//		return new ResponseEntity(new ErrorMessage("Product with id " + id + " not found"),HttpStatus.NOT_FOUND);
    //    }
        
    //    ProductImage productImage = productService.findByProductId(product.getId());
    //    product.setImageUrl(productImage.getUrl());
        
    //    return new ResponseEntity<Product>(product, HttpStatus.OK);
	//}
	
	
	
	
	
	
	
	
}
