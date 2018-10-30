package springeshop.controller;

import java.util.ArrayList;
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
import springeshop.service.BrandService;

@RestController
@RequestMapping("/api")
public class BrandApiController {

	public static final Logger logger = LoggerFactory.getLogger(BrandApiController.class);
	
	@Autowired
	private BrandService brandService;
	
	@RequestMapping(value = "/brands", method = RequestMethod.GET)
	public ResponseEntity<?> listBrands(){
		List<Brand> brands = brandService.findAllBrands();
		if(brands.isEmpty()){
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		}
		
		return new ResponseEntity<List<Brand>>(brands, HttpStatus.OK);
	}
}
