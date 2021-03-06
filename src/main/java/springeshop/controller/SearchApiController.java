package springeshop.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import springeshop.model.Brand;
import springeshop.model.Product;
import springeshop.model.ProductImage;
import springeshop.model.ProductPage;
import springeshop.model.ProductsPerBrand;
import springeshop.model.ProductsPerPriceRange;
import springeshop.service.BrandService;
import springeshop.service.InventoryService;
import springeshop.service.ProductImageService;
import springeshop.service.SearchService;
import springeshop.util.Constants;
import springeshop.util.ErrorMessage;

@RestController
@RequestMapping("/api")
public class SearchApiController {
	
	@Autowired
	private BrandService brandService;
	
	@Autowired
	private SearchService searchService;
	
	@Autowired
	private InventoryService inventoryService;
	
	@Autowired
	private ProductImageService productImageService;
	
	public static final Logger logger = LoggerFactory.getLogger(SearchApiController.class);

	@RequestMapping(value = "/search", method = RequestMethod.GET)
	public ResponseEntity<?> getSearchProducts(@RequestParam(value = "page") int page, @RequestParam(value = "keyword") String[] keywords
			, @RequestParam(value = "brand", required = false) String[] brands, @RequestParam(value = "range", required = false) String[] ranges,
			@RequestParam(value = "order", required = false) String order){
	
		ProductPage productPage = new ProductPage();
		
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
		
		productPage = searchService.findBySearchTerms(keywords, page, brandList, priceRangeList, order);
		
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
	
	@RequestMapping(value = "/search/brands/{brandname}/products/count", method = RequestMethod.GET)
	public 	ResponseEntity<?> getCategoryBrandProductsNumber(@PathVariable("brandname") String brandname, 
			@RequestParam(value = "range", required = false) String[] ranges, @RequestParam(value = "keyword") String[] keywords){
		

		
		int productsNumber = 0;
		
		if(!brandService.doesBrandExist(brandname)){
			logger.error("Brand with name {} does not  exist", brandname);
				return new ResponseEntity<>(new ErrorMessage("Brand with name {} does not  exist"), HttpStatus.BAD_REQUEST);
		}
		
		List<double[]> priceRangeList = new ArrayList<>();
		
		if(ranges != null){
			for(String range : ranges){
				double[] rangeValues = new double[2];
				rangeValues[0] = getRangeMin(range);
				rangeValues[1] = getRangeMax(range);
				priceRangeList.add(rangeValues);
			}
			
		}
		
		productsNumber = searchService.findSearchProductsNumberByBrand(keywords,  brandService.findByName(brandname), priceRangeList);
			
		ProductsPerBrand pNumber =  new ProductsPerBrand();
		pNumber.setNumber(productsNumber);
		pNumber.setBrand(brandname);
			
		return new ResponseEntity<ProductsPerBrand>(pNumber, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/search/ranges/{rangeid}/products/count", method = RequestMethod.GET)
	public ResponseEntity<?> getSearchProductsNumbersByRange(@PathVariable("rangeid") String rangeid, @RequestParam(value = "brand", required = false) String[] brands,
			@RequestParam(value = "keyword") String[] keywords){
		
		ProductsPerPriceRange ppNumber = new ProductsPerPriceRange();
		List<Brand> brandList = new ArrayList<>();
		
		if(brands != null){
			brandList = brandService.findSpecificBrands(brands);
		}
		
		ppNumber.setNumber(searchService.findSearchProductsNumberByRange(keywords, getRangeMin(rangeid), getRangeMax(rangeid), brandList));
		
		ppNumber.setMin(getRangeMin(rangeid));
		ppNumber.setMax(getRangeMax(rangeid));
		ppNumber.setRangeId(Integer.parseInt(rangeid));
			
		return new ResponseEntity<ProductsPerPriceRange>(ppNumber, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/search/brands", method = RequestMethod.GET)
	public ResponseEntity<?> getSearchProductsBrands(@RequestParam(value = "keyword") String[] keywords){
		
		List<Brand> brands = searchService.findSearchBrands(keywords);
		
		if(brands.isEmpty()){
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
			
		return new ResponseEntity<List<Brand>>(brands, HttpStatus.OK);
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
}
