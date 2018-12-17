package springeshop.controller;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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

import springeshop.model.Inventory;
import springeshop.model.Product;
import springeshop.model.ProductImage;
import springeshop.service.AmazonS3ClientService;
import springeshop.service.BrandService;
import springeshop.service.CategoryService;
import springeshop.service.InventoryService;
import springeshop.service.ProductImageService;
import springeshop.service.ProductService;
import springeshop.util.Constants;
import springeshop.util.ErrorMessage;
import springeshop.util.ImageType;

@RestController
@RequestMapping("/api")
public class ProductApiController {

	public static final Logger logger = LoggerFactory.getLogger(ProductApiController.class);
	
	@Autowired
	private ProductService productService;
	
	@Autowired
	private BrandService brandService;
	
	@Autowired
	private CategoryService categoryService;
	
	@Autowired
	private InventoryService inventoryService;
	
	@Autowired
	private ProductImageService productImageService;
	
	@Autowired
    private AmazonS3ClientService amazonS3ClientService;
	
	@RequestMapping(value = "/products", method = RequestMethod.GET)
	public ResponseEntity<?> getProductsByFilter(@RequestParam(value = "filter", required = false) String filter, @RequestParam(value = "page", required = false) int page){
					
		
		if(filter.equals("favorite")){
			Page<Product> favoriteProducts = productService.findFavoriteProducts(PageRequest.of(page, 4));
			
			if(favoriteProducts.getTotalElements() == 0){
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			
			addImagesAndQuantityToProducts(favoriteProducts);
			return new ResponseEntity<Page<Product>>(favoriteProducts, HttpStatus.OK);
		}else if(filter.equals("new")){
			Page<Product> newProducts = productService.findNewProducts(PageRequest.of(page, 4));
			
			if(newProducts.getTotalElements() == 0){
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			
			addImagesAndQuantityToProducts(newProducts);
			return new ResponseEntity<Page<Product>>(newProducts, HttpStatus.OK);
		}else 
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		
		
	}
	
	private void addImagesAndQuantityToProducts(Page<Product> products){
		for(Product product : products){
			ProductImage productImage = productImageService.findByProductId(product.getId());
	        product.setSmallImageUrl(productImage.getSmallImageurl());
	        product.setLargeImageUrl(productImage.getLargeImageurl());
	        product.setVerySmallImageUrl(productImage.getVerySmallImageurl());
	        
	        int productQuantity = inventoryService.findProductQuantity(product.getId());
	        product.setQuantity(productQuantity);
		}
	}
	
	
	@RequestMapping(value = "/products/{name}", method = RequestMethod.GET)
	public ResponseEntity<?> getProductByName(@PathVariable("name") String name){
		logger.info("Fetching Product with name {}", name);
        Product product = productService.findByName(name);
        
        if(product == null){
        	logger.error("Product with name {} not found.", name);
			return new ResponseEntity<>(new ErrorMessage("Product with name " + name + " not found"),HttpStatus.NOT_FOUND);
        }
        
        ProductImage productImage = productImageService.findByProductId(product.getId());
        product.setSmallImageUrl(productImage.getSmallImageurl());
        product.setLargeImageUrl(productImage.getLargeImageurl());
        product.setVerySmallImageUrl(productImage.getVerySmallImageurl());
        
        int productQuantity = inventoryService.findProductQuantity(product.getId());
        product.setQuantity(productQuantity);
        
        return new ResponseEntity<Product>(product, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/products", method = RequestMethod.POST, consumes = {"multipart/form-data"})
	public ResponseEntity<?> createProduct(@Valid @RequestPart(value = "product") Product product, @RequestPart (value = "smallImage") MultipartFile smallImage, 
    		@RequestPart(value = "largeImage") MultipartFile largeImage, @RequestPart (value = "verySmallImage") MultipartFile verySmallImage) throws InterruptedException, ExecutionException{
		
		logger.info("Creating Product : {}", product);
		
		if(productService.doesProductExist(product)){
			logger.error("Unable to create. A Product with name {} already exist", product.getName());
			return new ResponseEntity<>(new ErrorMessage("Unable to create. A  Product with name " + product.getName() + " already exist."), HttpStatus.CONFLICT);
		}
		
		if(!categoryService.doesCategoryExist(product.getCategory())){
			logger.error("Unable to create. Category with name {} does not  exist", product.getCategory().getName());
			return new ResponseEntity<>(new ErrorMessage("Unable to create. Category with name {} does not  exist"), HttpStatus.BAD_REQUEST);
		}
		
		if(!brandService.doesBrandExist(product.getBrand())){
			logger.error("Unable to create. Brand with name {} does not  exist", product.getBrand().getName());
			return new ResponseEntity<>(new ErrorMessage("Unable to create. Brand with name {} does not  exist"), HttpStatus.BAD_REQUEST);
		}
		
		product.getBrand().setId(brandService.findByName(product.getBrand().getName()).getId());
		product.getCategory().setId(categoryService.findByName(product.getCategory().getName()).getId());
		productService.saveProduct(product);
		
		if(product.getId() == 0) return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		
		CompletableFuture<Boolean> smallImageUploadFuture = this.amazonS3ClientService
				                                                .uploadImage(smallImage, getCorrectCategoryName(product.getCategory().getName()), ImageType.SMALL);
        CompletableFuture<Boolean> largeImageUploadFuture = this.amazonS3ClientService
        		                                                .uploadImage(largeImage, getCorrectCategoryName(product.getCategory().getName()), ImageType.LARGE);
        CompletableFuture<Boolean> verySmallImageUploadFuture = this.amazonS3ClientService
                .uploadImage(verySmallImage, getCorrectCategoryName(product.getCategory().getName()), ImageType.VERY_SMALL);
        boolean isSmallImageUploadSuccess = smallImageUploadFuture.get().booleanValue();
        boolean isLargeImageUploadSuccess = largeImageUploadFuture.get().booleanValue();
        boolean isVerySmallImageUploadSuccess = verySmallImageUploadFuture.get().booleanValue();
        
        if(!(isSmallImageUploadSuccess && isLargeImageUploadSuccess && isVerySmallImageUploadSuccess)) {
        	productService.deleteProductById(product.getId());
        	return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
        Inventory productInventory = new Inventory();
		productInventory.setProduct(product);
		productInventory.setQuantity(product.getQuantity());
		inventoryService.saveProductQuantity(productInventory);
			
		ProductImage productImage = new ProductImage();
		productImage.setProduct(product);
		productImage.setSmallImageurl(Constants.AMAZON_S3_URL + Constants.SMALL_PRODUCTS_PATH
		                                                      + getCorrectCategoryName(product.getCategory().getName()) + "/"
		                                                      + smallImage.getOriginalFilename());
		
		productImage.setLargeImageurl(Constants.AMAZON_S3_URL + Constants.LARGE_PRODUCTS_PATH 
                                                              + getCorrectCategoryName(product.getCategory().getName()) + "/"
                                                              + largeImage.getOriginalFilename());
		
		productImage.setVerySmallImageurl(Constants.AMAZON_S3_URL + Constants.VERY_SMALL_PRODUCTS_PATH 
                                                                  + getCorrectCategoryName(product.getCategory().getName()) + "/"
                                                                  + verySmallImage.getOriginalFilename());
		
		productImageService.saveImage(productImage);
			
		return new ResponseEntity<>(HttpStatus.CREATED);
		
		
	}
	
	private String getCorrectCategoryName(String categoryName){
		if(categoryName.contains("-")){
			String[] parts = categoryName.split("-");
			String partOneWithFirstLowercase = parts[0].substring(0, 1).toLowerCase() + parts[0].substring(1);
			String partTwoWithFirstLowercase = parts[1].substring(0, 1).toLowerCase() + parts[1].substring(1);
			return partOneWithFirstLowercase + "-" + partTwoWithFirstLowercase;
		}
		
		return categoryName.substring(0,1).toLowerCase() + categoryName.substring(1);
	}
	
	@RequestMapping(value = "/products/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateProduct(@PathVariable("id") int id, @Valid @RequestBody Product product){
		logger.info("Updating Category with id {}", id);
		
		Product currentProduct = productService.findById(id);
		
		if (currentProduct == null) {
            logger.error("Unable to update. Product with id {} not found.", id);
            return new ResponseEntity<>(new ErrorMessage("Unable to update. Product with id " + id + " not found."),
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
            return new ResponseEntity<>(new ErrorMessage("Unable to delete. Product with id " + id + " not found."),
                    HttpStatus.NOT_FOUND);
        }
        
        productService.deleteProductById(id);
        return new ResponseEntity<Product>(HttpStatus.NO_CONTENT);
    }
	
}
