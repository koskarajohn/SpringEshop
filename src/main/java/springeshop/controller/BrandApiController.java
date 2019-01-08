package springeshop.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import springeshop.model.Brand;
import springeshop.model.Category;
import springeshop.service.CategoryService;
import springeshop.service.ProductService;
import springeshop.util.ErrorMessage;

@RestController
@RequestMapping("/api")
public class BrandApiController {

	public static final Logger logger = LoggerFactory.getLogger(BrandApiController.class);
	
	@Autowired
	private CategoryService categoryService;
	
	@Autowired
	private ProductService productService;
	
	@RequestMapping(value = "/brands", method = RequestMethod.GET)
	public ResponseEntity<?> getCategoryBrands(@RequestParam(value ="category", required = false) String category){
		
		Category requestedCategory = categoryService.findByName(getCorrectCategoryName(category));
		
		if(requestedCategory == null){
			return new ResponseEntity<>(new ErrorMessage("Category does not exist"),HttpStatus.BAD_REQUEST);
		}
		
		List<Brand> brands = productService.findCategoryBrands(requestedCategory.getId());
		
		if(brands.isEmpty()){
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		
		brands.sort((Brand brand1, Brand brand2) -> brand1.getName().compareTo(brand2.getName()));
		
		return new ResponseEntity<List<Brand>>(brands, HttpStatus.OK);
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
}
