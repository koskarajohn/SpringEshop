package springeshop.controller;

import java.time.LocalDate;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import springeshop.model.Product;
import springeshop.model.Review;
import springeshop.model.User;
import springeshop.service.ProductService;
import springeshop.service.ReviewService;
import springeshop.service.UserService;

@RestController
@RequestMapping("/api")
public class ReviewApiController {

	@Autowired
	private ReviewService reviewService;
	
	@Autowired
	private ProductService productService;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/reviews")
	public ResponseEntity<?> createReview(@Valid @RequestBody Review review){
		
		Product product = productService.findByName(review.getProduct().getName());
		
		if(product == null)
			return ResponseEntity.badRequest().build();
		
		User user = userService.findById(review.getUser().getId());
		if(user == null)
			return ResponseEntity.badRequest().build();
		
		try {
			review.setProduct(product);
			review.setUser(user);
			review.setDate(LocalDate.now());
			reviewService.saveReview(review);
			return ResponseEntity.noContent().build();
		} catch (DataAccessException e) {
			throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/reviews")
	public ResponseEntity<?> getReviews(@RequestParam( value = "productid",required = false) String productId){
		
		Product product = productService.findById(Integer.parseInt(productId));
		if(product == null)
			return ResponseEntity.badRequest().build();
		
		List<Review> reviews = reviewService.findByProduct(product);
		return ResponseEntity.ok(reviews);
	}
}
