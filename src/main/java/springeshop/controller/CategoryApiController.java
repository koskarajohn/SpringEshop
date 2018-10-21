package springeshop.controller;

import java.util.List;

import javax.persistence.Id;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import springeshop.model.Category;
import springeshop.service.CategoryService;
import springeshop.util.ErrorMessage;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class CategoryApiController {

	public static final Logger logger = LoggerFactory.getLogger(CategoryApiController.class);
	
	@Autowired
	CategoryService categoryService;
	
	@RequestMapping(value = "/categories", method = RequestMethod.GET)
	public ResponseEntity<?> listCategories(){
		List<Category> categories =  categoryService.findAllCategories();
		if(categories.isEmpty())
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		
		return new ResponseEntity<List<Category>>(categories, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/categories/{id}", method = RequestMethod.GET)
	public 	ResponseEntity<?> getCategoryById(@PathVariable("id") int id){
		logger.info("Fetching Category with id {}", id);
		Category category = categoryService.findById(id);
		if(category == null){
			logger.error("Category with id {} not found.", id);
			return new ResponseEntity(new ErrorMessage("Category with id " + id + " not found"),HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Category>(category, HttpStatus.OK);
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
	
	@RequestMapping(value = "/categories/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateCategory(@PathVariable("id") int id, @Valid @RequestBody Category category){
		logger.info("Updating Category with id {}", id);
		
		Category currentCategory = categoryService.findById(id);
		
		if (currentCategory == null) {
            logger.error("Unable to update. Category with id {} not found.", id);
            return new ResponseEntity(new ErrorMessage("Unable to update. Category with id " + id + " not found."),
                    HttpStatus.NOT_FOUND);
        }
		
		currentCategory.setName(category.getName());
		
		categoryService.updateCategory(currentCategory);
		return new ResponseEntity<Category>(currentCategory, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/categories/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteCategory(@PathVariable("id") int id) {
        logger.info("Fetching & Deleting Category with id {}", id);
 
        Category category = categoryService.findById(id);
        if (category == null) {
            logger.error("Unable to delete. User with id {} not found.", id);
            return new ResponseEntity(new ErrorMessage("Unable to delete. Category with id " + id + " not found."),
                    HttpStatus.NOT_FOUND);
        }
        
        categoryService.deleteCategoryById(id);
        return new ResponseEntity<Category>(HttpStatus.NO_CONTENT);
    }
	
	
 }
