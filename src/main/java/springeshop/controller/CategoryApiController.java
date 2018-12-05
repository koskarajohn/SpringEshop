package springeshop.controller;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import springeshop.model.Category;
import springeshop.model.Product;
import springeshop.model.ProductImage;
import springeshop.model.ProductsPerBrand;
import springeshop.model.ProductsPerPriceRange;
import springeshop.service.BrandService;
import springeshop.service.CategoryService;
import springeshop.service.InventoryService;
import springeshop.service.ProductImageService;
import springeshop.service.ProductService;
import springeshop.util.ErrorMessage;

@RestController
@RequestMapping("/api")
public class CategoryApiController {

	public static final Logger logger = LoggerFactory.getLogger(CategoryApiController.class);
	
	@Autowired
	private BrandService brandService;
	
	@Autowired
	private CategoryService categoryService;
	
	@Autowired
	private InventoryService inventoryService;
	
	@Autowired
	private ProductService productService;
	
	@Autowired
	private ProductImageService productImageService;
	
	@RequestMapping(value = "/categories/{name}", method = RequestMethod.GET)
	public 	ResponseEntity<?> getCategoryProducts(@PathVariable("name") String name, @RequestParam(value = "page", required = true) int page, 
			@RequestParam(value = "order", required = true) String order){
		
		Page<Product> products;
		
		logger.info("Fetching Category with name {}", name);
		Category category = categoryService.findByName(getCorrectCategoryName(name));
		
		if(category == null){
			logger.error("Category with name {} not found.", name);
			return new ResponseEntity(new ErrorMessage("Category with name " + name + " not found"),HttpStatus.NOT_FOUND);
		}
		
		if(order.equals("asc")){
			products = productService.findByCategoryId(category.getId(), PageRequest.of(page, 6, Sort.Direction.ASC, "price"));
		}else if(order.equals("desc")){
			products = productService.findByCategoryId(category.getId(), PageRequest.of(page, 6, Sort.Direction.DESC, "price"));
		}else{
			products = productService.findByCategoryId(category.getId(), PageRequest.of(page, 6, Sort.Direction.ASC, "price"));
		}
		
		
		if(products == null){
			logger.error("No products found.");
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		}
		
		for(Product product : products){
			ProductImage productImage = productImageService.findByProductId(product.getId());
	        product.setSmallImageUrl(productImage.getSmallImageurl());
	        product.setLargeImageUrl(productImage.getLargeImageurl());
	        
	        int productQuantity = inventoryService.findProductQuantity(product.getId());
	        product.setQuantity(productQuantity);
		}
		
		return new ResponseEntity<Page<Product>>(products, HttpStatus.OK);
	}
	
	private String getCorrectCategoryName(String categoryName){
		if(categoryName.contains("-")){
			String[] parts = categoryName.split("-");
			String partOneWithFirstCapital = parts[0].substring(0, 1).toUpperCase() + parts[0].substring(1);
			String partTwoWithFirstCapital = parts[1].substring(0, 1).toUpperCase() + parts[1].substring(1);
			return partOneWithFirstCapital + "-" + partTwoWithFirstCapital;
		}
		
		return categoryName.substring(0,1).toUpperCase() + categoryName.substring(1);
	}
	
	@RequestMapping(value = "/categories/{name}/count", method = RequestMethod.GET)
	public 	ResponseEntity<?> getCategoryProductsNumber(@PathVariable("name") String name, @RequestParam(value = "brand", required = false) String brand,
			                                           @RequestParam(value = "min", defaultValue = "-1", required = false) double min, 
			                                           @RequestParam(value = "max", defaultValue = "-1", required = false) double max){
		
		logger.info("Fetching Category with name {}", name);
		Category category = categoryService.findByName(getCorrectCategoryName(name));
		
		if(category == null){
			logger.error("Category with name {} not found.", name);
			return new ResponseEntity(new ErrorMessage("Category with name " + name + " not found"),HttpStatus.NOT_FOUND);
		}
		
		int productsNumber = 0;
		
		if(brand != null && min == -1.0 && max == -1.0){
			
			if(!brandService.doesBrandExist(brand)){
				logger.error("Unable to create. Brand with name {} does not  exist", brand);
				return new ResponseEntity(new ErrorMessage("Unable to create. Brand with name {} does not  exist"), HttpStatus.BAD_REQUEST);
			}
			
			productsNumber = productService.findNumberOfProductsOfBrandInCategory(category.getId(), brandService.findByName(brand).getId());
			
			ProductsPerBrand pNumber =  new ProductsPerBrand();
			pNumber.setNumber(productsNumber);
			pNumber.setBrand(brand);
			
			return new ResponseEntity<ProductsPerBrand>(pNumber, HttpStatus.OK);
		}else if(brand == null && min != -1 && max != -1){
            productsNumber = productService.findNumberOfProductsWithinPriceRange(category.getId(), min, max);
			
			ProductsPerPriceRange ppNumber = new ProductsPerPriceRange();
			ppNumber.setNumber(productsNumber);
			ppNumber.setMin(min);
			ppNumber.setMax(max);
			
			return new ResponseEntity<ProductsPerPriceRange>(ppNumber, HttpStatus.OK);
		}else{
			  return new ResponseEntity(HttpStatus.BAD_REQUEST);
		}
		
		
		
	}
	
	@RequestMapping(value = "/categories", method = RequestMethod.POST)
	public ResponseEntity<?> createCategory(@Valid @RequestBody Category category, UriComponentsBuilder ucBuilder){
		logger.info("Creating Category : {}", category);
		
		if(categoryService.doesCategoryExist(category)){
			logger.error("Unable to create. A Category with name {} already exist", category.getName());
			return new ResponseEntity(new ErrorMessage("Unable to create. A Category with name " + category.getName() + " already exists."), HttpStatus.CONFLICT);
		}
		
		categoryService.saveCategory(category);
		
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/categories/{id}").buildAndExpand(category.getId()).toUri());
		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}
	
	
 }
