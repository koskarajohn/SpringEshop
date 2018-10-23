package springeshop.controller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import springeshop.model.Category;
import springeshop.model.Product;
import springeshop.model.ProductImage;
import springeshop.service.ProductService;
import springeshop.util.ErrorMessage;

@RestController
@RequestMapping("/api")
public class ProductApiController {

	public static final Logger logger = LoggerFactory.getLogger(CategoryApiController.class);
	
	@Autowired
	private ProductService productService;
	
	@RequestMapping(value = "/products", method = RequestMethod.GET)
	public ResponseEntity<?> listProducts(){
		List<Product> products = productService.findAllProducts();
		if(products.isEmpty()){
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		}
		
		for(Product product : products){
			ProductImage productImage = productService.findByProductId(product.getId());
	        product.setImageUrl(productImage.getUrl());
		}
		
		return new ResponseEntity<List<Product>>(products, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/products/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getProduct(@PathVariable("id") int id){
		logger.info("Fetching Product with id {}", id);
        Product product = productService.findById(id);
        
        if(product == null){
        	logger.error("Product with id {} not found.", id);
			return new ResponseEntity(new ErrorMessage("Product with id " + id + " not found"),HttpStatus.NOT_FOUND);
        }
        
        ProductImage productImage = productService.findByProductId(id);
        product.setImageUrl(productImage.getUrl());
        
        return new ResponseEntity<Product>(product, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/products", method = RequestMethod.POST)
	public ResponseEntity<?> createProduct(@Valid @RequestBody Product product, UriComponentsBuilder ucBuilder){
		logger.info("Creating Product : {}", product);
		
		if(productService.doesProductExist(product)){
			logger.error("Unable to create. A Product with name {} already exist", product.getName());
			return new ResponseEntity(new ErrorMessage("Unable to create. A Product with name " + product.getName() + " already exist."), HttpStatus.CONFLICT);
		}
		
		productService.saveProduct(product);
		
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/products/{id}").buildAndExpand(product.getId()).toUri());
		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
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
	
	
	
	
	
	
	
	
	
	
}
