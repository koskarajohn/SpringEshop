package springeshop.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import springeshop.model.Product;
import springeshop.model.ProductImage;
import springeshop.model.ProductPage;
import springeshop.service.InventoryService;
import springeshop.service.ProductImageService;
import springeshop.service.ProductService;
import springeshop.service.SearchService;

@RestController
@RequestMapping("/api")
public class SearchApiController {
	
	@Autowired
	private SearchService searchService;
	
	@Autowired
	private InventoryService inventoryService;
	
	@Autowired
	private ProductImageService productImageService;
	
	public static final Logger logger = LoggerFactory.getLogger(SearchApiController.class);

	@RequestMapping(value = "/search", method = RequestMethod.GET)
	public ResponseEntity<?> getSearchProducts(@RequestParam(value = "page") int page, @RequestParam(value = "keyword") String[] keywords){
	
		ProductPage productPage = new ProductPage();
		productPage = searchService.findBySearchTerms(keywords, page);
		
		if(productPage.getContent().isEmpty()){
			logger.error("No products found.");
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		
		addImagesAndQuantityToProducts(productPage.getContent());
		
		return new ResponseEntity<>(productPage, HttpStatus.OK);
	}
	
	private void addImagesAndQuantityToProducts(List<Product> products){
		for(Product product : products){
			ProductImage productImage = productImageService.findByProductId(product.getId());
	        product.setSmallImageUrl(productImage.getSmallImageurl());
	        product.setLargeImageUrl(productImage.getLargeImageurl());
	        
	        int productQuantity = inventoryService.findProductQuantity(product.getId());
	        product.setQuantity(productQuantity);
		}
	}
}
