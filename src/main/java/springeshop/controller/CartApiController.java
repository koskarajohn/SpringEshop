package springeshop.controller;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
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
import springeshop.model.CartPrimaryKey;
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
			@RequestParam(value = "quantity") int quantity){
		
		logger.info("Creating Card Product : {}");
		
		User user = userService.findById(userid);
		Product product = productService.findById(productid);
		
		if(!userService.doesUserExist(user)){
			return new ResponseEntity(new ErrorMessage("Unable to create. User does not exist"), HttpStatus.BAD_REQUEST);
		}
		
		if(!productService.doesProductExist(product)){
			return new ResponseEntity(new ErrorMessage("Unable to create. Product does not exist"), HttpStatus.BAD_REQUEST);
		}
		
		if(quantity < 0){
			return new ResponseEntity(new ErrorMessage("Unable to create. Quantity cannot be negative"), HttpStatus.BAD_REQUEST);
		}
		
		CartPrimaryKey cartProductCompositeId = new CartPrimaryKey(userid, productid);
		Cart cart =  new Cart();		
		Timestamp expiration = new Timestamp(System.currentTimeMillis());
		
		cart.setId(cartProductCompositeId);
		cart.setUser(user);
		cart.setProduct(product);
		cart.setQuantity(quantity);
		cart.setExpiration(expiration);
		cartService.addProductToCart(cart);
		
		if(!cartService.doesUserCartRowExist(userid, productid))
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		
		return new ResponseEntity<>(HttpStatus.CREATED);
		
		
	}
	
	@RequestMapping(value = "/carts", method = RequestMethod.GET)
	public ResponseEntity<?> getUserCartProducts(@RequestParam(value = "userid", required = false) int userid){
		
		User user = userService.findById(userid);
		
		if(!userService.doesUserExist(user)){
			return new ResponseEntity(new ErrorMessage("Unable to create. User does not exist"), HttpStatus.BAD_REQUEST);
		}
		
		List<Cart> products = cartService.findUserCartProducts(userid);
		List<CartProduct> cartProducts = new ArrayList<>();
		
		if(products == null){
			logger.error("No products found.");
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		}
		
		for(Cart cart : products){
			CartProduct prod = new CartProduct();
			prod.setName(cart.getProduct().getName());
			prod.setBrand(cart.getProduct().getBrand().getName());
			prod.setQuantity(cart.getQuantity());
			prod.setPrice(cart.getProduct().getPrice());
			prod.setImageUrl(cart.getProduct().getSmallImageUrl());
			cartProducts.add(prod);
		}
		
		return new ResponseEntity<List<CartProduct>>(cartProducts, HttpStatus.OK);
		
		
	}
}
