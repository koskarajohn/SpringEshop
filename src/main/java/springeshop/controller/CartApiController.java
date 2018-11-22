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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
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
		
		if(user == null){
			return new ResponseEntity(new ErrorMessage("Unable to create. User does not exist"), HttpStatus.BAD_REQUEST);
		}
		
		if(product == null){
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
	
	@RequestMapping(value = "/carts/{userid}", method = RequestMethod.GET)
	public ResponseEntity<?> getUserCartProducts(@PathVariable(value = "userid", required = true) int userid){
		
		User user = userService.findById(userid);
		
		if(user == null){
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
			prod.setUserid(cart.getId().getUserId());
			prod.setProductid(cart.getId().getProductId());
			prod.setName(cart.getProduct().getName());
			prod.setBrand(cart.getProduct().getBrand().getName());
			prod.setQuantity(cart.getQuantity());
			prod.setPrice(cart.getProduct().getPrice());
			prod.setImageUrl(cart.getProduct().getSmallImageUrl());
			cartProducts.add(prod);
		}
		
		return new ResponseEntity<List<CartProduct>>(cartProducts, HttpStatus.OK);
		
		
	}
	
	@RequestMapping(value = "/carts/{userid}/products/{productid}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteUserCartProduct(@PathVariable(value = "userid", required = true) String userid, 
			@PathVariable(value = "productid", required = true) String productid){
		
		int usrId = Integer.parseInt(userid);
		int prodId = Integer.parseInt(productid);
		
		User user = userService.findById(usrId);
		Product product = productService.findById(prodId);
		
		if(user == null){
			return new ResponseEntity(new ErrorMessage("Unable to delete. User does not exist"), HttpStatus.BAD_REQUEST);
		}
		
		if(!cartService.doesUserCartRowExist(usrId, prodId)){
			return new ResponseEntity(new ErrorMessage("Unable to delete. Product does not exist"), HttpStatus.BAD_REQUEST);
		}
		
		cartService.deleteUserCartRow(usrId, prodId);
		
		if(cartService.doesUserCartRowExist(usrId, prodId))
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		
		return new ResponseEntity(HttpStatus.OK);
	}
	
	@RequestMapping(value = "/carts/{userid}/products/{productid}", method = RequestMethod.PATCH)
	public ResponseEntity<?> updateCartProduct(@PathVariable(value = "userid", required = true) String userid, @PathVariable(value = "productid", required = true) String productid, 
			@RequestParam(value = "quantity", required = true) int quantity){
		
		int usrId = Integer.parseInt(userid);
		int prodId = Integer.parseInt(productid);
		
		User user = userService.findById(usrId);
		Product product = productService.findById(prodId);
		
		if(user == null){
			return new ResponseEntity(new ErrorMessage("Unable to create. User does not exist"), HttpStatus.BAD_REQUEST);
		}
		
		if(product == null){
			return new ResponseEntity(new ErrorMessage("Unable to create. Product does not exist"), HttpStatus.BAD_REQUEST);
		}
		
		if(quantity < 0){
			return new ResponseEntity(new ErrorMessage("Unable to create. Quantity cannot be negative"), HttpStatus.BAD_REQUEST);
		}
		
		int oldQuantity = cartService.findUserCartRow(usrId, prodId).getQuantity();
		if(oldQuantity != quantity){
			cartService.updateCartProduct(usrId, prodId, quantity);
			//int updatedQuantity = cartService.findUserCartRow(usrId, prodId).getQuantity();
			//if(oldQuantity == updatedQuantity)
			//  return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return new ResponseEntity<>(HttpStatus.OK);	
	}
	
	@RequestMapping(value = "/carts/{userid}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteUserCart(@PathVariable(value = "userid", required = true) String userid){
		
		int usrId = Integer.parseInt(userid);
		User user = userService.findById(usrId);
		
		if(user == null){
			return new ResponseEntity(new ErrorMessage("Unable to delete. User does not exist"), HttpStatus.BAD_REQUEST);
		}
		
		if(cartService.findUserCartProducts(usrId).isEmpty()){
			return new ResponseEntity(new ErrorMessage("Unable to delete. Cart is empty"), HttpStatus.BAD_REQUEST);
		}
		
		cartService.deleteUserCart(usrId);
		
		if(!cartService.findUserCartProducts(usrId).isEmpty())
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		
		return new ResponseEntity(HttpStatus.OK);
	}
	
}
