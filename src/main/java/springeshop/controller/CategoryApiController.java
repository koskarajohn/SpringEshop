package springeshop.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
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

import springeshop.model.Brand;
import springeshop.model.Category;
import springeshop.model.Product;
import springeshop.model.ProductImage;
import springeshop.model.ProductPage;
import springeshop.model.ProductsPerBrand;
import springeshop.model.ProductsPerPriceRange;
import springeshop.service.BrandService;
import springeshop.service.CategoryService;
import springeshop.service.InventoryService;
import springeshop.service.ProductImageService;
import springeshop.service.ProductService;
import springeshop.util.Constants;
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
			@RequestParam(value = "order", required = false) String order, @RequestParam(value = "brand", required = false) String[] brands,
			@RequestParam(value = "range", required = false) String[] ranges){
		
		Page<Product> products;
		ProductPage filteredProductPage = new ProductPage();
		Direction sortDirection = order.equals("asc") ? Sort.Direction.ASC : Sort.Direction.DESC;
		
		logger.info("Fetching Category with name {}", name);
		Category category = categoryService.findByName(getCorrectCategoryName(name));
		
		if(category == null){
			logger.error("Category with name {} not found.", name);
			return new ResponseEntity<>(new ErrorMessage("Category with name " + name + " not found"),HttpStatus.NOT_FOUND);
		}
		
		if(brands == null && ranges == null){
			products = productService.findByCategoryId(category.getId(), PageRequest.of(page, 6, sortDirection, "price"));
			addImagesAndQuantityToProducts(products.getContent());
			
			if(products == null){
				logger.error("No products found.");
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			
			return new ResponseEntity<>(products, HttpStatus.OK);
			
		}else{
			List<Brand> brandList = new ArrayList<>();
			List<double[]> priceRangeList = new ArrayList<>();
			
			if(brands != null){
				brandList = brandService.findSpecificBrands(brands);
			}
			
			if(ranges != null){
				for(String range : ranges){
					double[] rangeValues = new double[2];
					rangeValues[0] = getRangeMin(range);
					rangeValues[1] = getRangeMax(range);
					priceRangeList.add(rangeValues);
				}
			}
			
			filteredProductPage = productService.findByCategoryIdWithBrandAndPriceRange(category, brandList, priceRangeList, page, order);
			
			if(filteredProductPage.getContent().isEmpty()){
				logger.error("No products found.");
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			
			addImagesAndQuantityToProducts(filteredProductPage.getContent());
			
			return new ResponseEntity<>(filteredProductPage, HttpStatus.OK);
		}
		
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
	
	private String getCorrectCategoryName(String categoryName){
		if(categoryName.contains("-")){
			String[] parts = categoryName.split("-");
			String partOneWithFirstCapital = parts[0].substring(0, 1).toUpperCase() + parts[0].substring(1);
			String partTwoWithFirstCapital = parts[1].substring(0, 1).toUpperCase() + parts[1].substring(1);
			return partOneWithFirstCapital + "-" + partTwoWithFirstCapital;
		}
		
		return categoryName.substring(0,1).toUpperCase() + categoryName.substring(1);
	}
	
	@RequestMapping(value = "/categories/{categoryname}/brands/{brandname}/products/count", method = RequestMethod.GET)
	public 	ResponseEntity<?> getCategoryBrandProductsNumber(@PathVariable("categoryname") String categoryname, @PathVariable("brandname") String brandname
			                                                , @RequestParam(value = "range", required = false) String[] ranges){
		
		logger.info("Fetching Category with name {}", categoryname);
		Category category = categoryService.findByName(getCorrectCategoryName(categoryname));
		
		if(category == null){
			logger.error("Category with name {} not found.", categoryname);
			return new ResponseEntity<>(new ErrorMessage("Category with name " + categoryname + " not found"),HttpStatus.NOT_FOUND);
		}
		
		int productsNumber = 0;
		
		if(!brandService.doesBrandExist(brandname)){
			logger.error("Brand with name {} does not  exist", brandname);
				return new ResponseEntity<>(new ErrorMessage("Brand with name {} does not  exist"), HttpStatus.BAD_REQUEST);
		}
			
		if(ranges == null){
			productsNumber = productService.findNumberOfProductsOfBrandInCategory(category.getId(), brandService.findByName(brandname).getId());
		}else{
			List<double[]> priceRangeList = new ArrayList<>();
			for(String range : ranges){
				double[] rangeValues = new double[2];
				rangeValues[0] = getRangeMin(range);
				rangeValues[1] = getRangeMax(range);
				priceRangeList.add(rangeValues);
			}
			
			productsNumber = productService.findNumberOfBrandProductsWithinSpecificRangesInCategory(category, brandService.findByName(brandname), priceRangeList);
		}
		
			
		ProductsPerBrand pNumber =  new ProductsPerBrand();
		pNumber.setNumber(productsNumber);
		pNumber.setBrand(brandname);
			
		return new ResponseEntity<ProductsPerBrand>(pNumber, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/categories/{name}/ranges/{rangeid}/products/count", method = RequestMethod.GET)
	public 	ResponseEntity<?> getCategoryRangeProductsNumber(@PathVariable("name") String name, @PathVariable("rangeid") String rangeid,
			                                                        @RequestParam(value = "brand", required = false) String[] brands){
		
		logger.info("Fetching Category with name {}", name);
		Category category = categoryService.findByName(getCorrectCategoryName(name));
		
		if(category == null){
			logger.error("Category with name {} not found.", name);
			return new ResponseEntity<>(new ErrorMessage("Category with name " + name + " not found"),HttpStatus.NOT_FOUND);
		}
		
		ProductsPerPriceRange ppNumber = new ProductsPerPriceRange();
		
		if(brands == null){
			ppNumber.setNumber(productService.findNumberOfProductsWithinPriceRange(category, getRangeMin(rangeid), getRangeMax(rangeid)));
		}else{
			List<Brand> brandList = new ArrayList<>();
            brandList = brandService.findSpecificBrands(brands);
			ppNumber.setNumber(productService.findNumberOfSpecificBrandsProductsWithinPriceRange(category, getRangeMin(rangeid), getRangeMax(rangeid), brandList));
		}
			
		ppNumber.setMin(getRangeMin(rangeid));
		ppNumber.setMax(getRangeMax(rangeid));
		ppNumber.setRangeId(Integer.parseInt(rangeid));
			
		return new ResponseEntity<ProductsPerPriceRange>(ppNumber, HttpStatus.OK);
	
	}
	
	private double getRangeMin(String range){
		double min = 0.0;
		
		if(range.equals("1")){
			min = Constants.PRICE_RANGE_ZERO_TO_TEN[0];
		}else if(range.equals("2")){
			min = Constants.PRICE_RANGE_TEN_TO_TWENTY[0];
		}else if(range.equals("3")){
			min = Constants.PRICE_RANGE_TWENTY_TO_THIRTY[0];
		}else if(range.equals("4")){
			min = Constants.PRICE_RANGE_THIRTY_TO_FIFTY[0];
		}
		
		return min;
	}
	
	private double getRangeMax(String range){
		double max = 0.0;
		
		if(range.equals("1")){
			max = Constants.PRICE_RANGE_ZERO_TO_TEN[1];
		}else if(range.equals("2")){
			max = Constants.PRICE_RANGE_TEN_TO_TWENTY[1];
		}else if(range.equals("3")){
			max = Constants.PRICE_RANGE_TWENTY_TO_THIRTY[1];
		}else if(range.equals("4")){
			max = Constants.PRICE_RANGE_THIRTY_TO_FIFTY[1];
		}
		
		return max;
	}
	
	
	@RequestMapping(value = "/categories", method = RequestMethod.POST)
	public ResponseEntity<?> createCategory(@Valid @RequestBody Category category, UriComponentsBuilder ucBuilder){
		logger.info("Creating Category : {}", category);
		
		if(categoryService.doesCategoryExist(category)){
			logger.error("Unable to create. A Category with name {} already exist", category.getName());
			return new ResponseEntity<>(new ErrorMessage("Unable to create. A Category with name " + category.getName() + " already exists."), HttpStatus.CONFLICT);
		}
		
		categoryService.saveCategory(category);
		
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/categories/{id}").buildAndExpand(category.getId()).toUri());
		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}
	
	
 }
