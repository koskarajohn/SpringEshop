package springeshop.controller;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import springeshop.model.ProductImage;
import springeshop.service.ProductImageService;

@RestController
@RequestMapping("/api")
public class ImageController {
	
public static final Logger logger = LoggerFactory.getLogger(ImageController.class);
	
	@Autowired
	private ProductImageService imageService;
	
	@RequestMapping(value = "/images", method = RequestMethod.POST)
	public ResponseEntity<?> createImage(@Valid @RequestBody ProductImage image, UriComponentsBuilder ucBuilder){
		logger.info("Creating Image : {}", image);
		
		imageService.saveImage(image);
		
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/images/{id}").buildAndExpand(image.getId()).toUri());
		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}

}
