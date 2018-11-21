package springeshop.controller;

import java.sql.Timestamp;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import springeshop.model.Cart;
import springeshop.model.CartProduct;
import springeshop.model.Product;
import springeshop.model.User;
import springeshop.service.CartService;
import springeshop.service.ProductService;
import springeshop.service.UserService;
import springeshop.util.ErrorMessage;


@RestController
@RequestMapping("/api")
public class CartApiController {

	
public static final Logger logger = LoggerFactory.getLogger(BrandApiController.class);
	
	@Autowired
	private CartService cartService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private ProductService productService;
	
	@RequestMapping(value = "/carts", method = RequestMethod.POST)
	public ResponseEntity<?> createCartProduct(@RequestParam(value = "userid") int userid, @RequestParam(value = "productid") int productid, 
			@RequestParam(value = "quantity") int quantity) throws InterruptedException, ExecutionException{
		
		logger.info("Creating Card Product : {}");
		
		if(userid < 1){
			return new ResponseEntity(new ErrorMessage("Unable to create. User id is not valid"), HttpStatus.BAD_REQUEST);
		}
		
		if(productid < 1){
			return new ResponseEntity(new ErrorMessage("Unable to create. Product id is not valid"), HttpStatus.BAD_REQUEST);
		}
		
		if(quantity < 0){
			return new ResponseEntity(new ErrorMessage("Unable to create. Quantity cannot be negative"), HttpStatus.BAD_REQUEST);
		}
		
		CartProduct cartProductCompositeId = new CartProduct(userid, productid);
		Cart cart =  new Cart();
		User user = userService.findById(userid);
		Product product = productService.findById(productid);		
		Timestamp expiration = new Timestamp(System.currentTimeMillis());
		
		cart.setId(cartProductCompositeId);
		cart.setUser(user);
		cart.setProduct(product);
		cart.setQuantity(quantity);
		cart.setExpiration(expiration);
		cartService.addProductToCart(cart);
		return new ResponseEntity<String>(HttpStatus.CREATED);
		
		
	}
}
