package springeshop.controller;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import springeshop.model.Cart;
import springeshop.model.CartPrimaryKey;
import springeshop.model.CartProduct;
import springeshop.model.CartProductCount;
import springeshop.model.Product;
import springeshop.model.ProductImage;
import springeshop.model.User;
import springeshop.service.CartService;
import springeshop.service.ProductImageService;
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
	
	@Autowired
	private ProductImageService productImageService;
	
	@RequestMapping(value = "/carts", method = RequestMethod.POST)
	public ResponseEntity<?> createCartProduct(@RequestBody CartProduct cartProduct){
		
		logger.info("Creating Card Product : {}");
		
		User user = userService.findById(cartProduct.getUserid());
		Product product = productService.findById(cartProduct.getProductid());
		
		if(user == null){
			return new ResponseEntity<>(new ErrorMessage("Unable to create. User does not exist"), HttpStatus.BAD_REQUEST);
		}
		
		if(product == null){
			return new ResponseEntity<>(new ErrorMessage("Unable to create. Product does not exist"), HttpStatus.BAD_REQUEST);
		}
		
		if(cartProduct.getQuantity() < 0){
			return new ResponseEntity<>(new ErrorMessage("Unable to create. Quantity cannot be negative"), HttpStatus.BAD_REQUEST);
		}
		
		CartPrimaryKey cartProductCompositeId = new CartPrimaryKey(cartProduct.getUserid(), cartProduct.getProductid());
		Cart cartRow =  new Cart();		
		Timestamp expiration = new Timestamp(System.currentTimeMillis());
		
		cartRow.setId(cartProductCompositeId);
		cartRow.setUser(user);
		cartRow.setProduct(product);
		cartRow.setQuantity(cartProduct.getQuantity());
		cartRow.setExpiration(expiration);
		
		if(cartService.addProductToCartAndIsSuccess(cartRow)){
			CartProduct cartProductCreated = new CartProduct();
			cartProductCreated.setUserid(cartRow.getId().getUserId());
			cartProductCreated.setProductid(cartRow.getId().getProductId());
			cartProductCreated.setName(cartRow.getProduct().getName());
			cartProductCreated.setBrand(cartRow.getProduct().getBrand().getName());
			cartProductCreated.setQuantity(cartRow.getQuantity());
			cartProductCreated.setPrice(cartRow.getProduct().getPrice());
			
			return new ResponseEntity<>(cartProductCreated, HttpStatus.CREATED);
		}
				
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@RequestMapping(value = "/carts/{userid}", method = RequestMethod.GET)
	public ResponseEntity<?> getUserCartProducts(@PathVariable(value = "userid", required = true) int userid){
		
		User user = userService.findById(userid);
		
		if(user == null){
			return new ResponseEntity<>(new ErrorMessage("User does not exist"), HttpStatus.BAD_REQUEST);
		}
		
		List<Cart> products = cartService.findUserCartProducts(userid);
		List<CartProduct> cartProducts = new ArrayList<>();
		
		if(products == null){
			logger.error("No products found.");
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		
		for(Cart cart : products){
			CartProduct prod = new CartProduct();
			prod.setUserid(cart.getId().getUserId());
			prod.setProductid(cart.getId().getProductId());
			prod.setName(cart.getProduct().getName());
			prod.setBrand(cart.getProduct().getBrand().getName());
			prod.setQuantity(cart.getQuantity());
			prod.setPrice(cart.getProduct().getPrice());
			
			ProductImage productImage = productImageService.findByProductId(prod.getProductid());
			prod.setImageUrl(productImage.getVerySmallImageurl());
			
			cartProducts.add(prod);
		}
		
		return new ResponseEntity<List<CartProduct>>(cartProducts, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/carts/{userid}/count", method = RequestMethod.GET)
	public ResponseEntity<?> getUserCartProductsCount(@PathVariable(value = "userid", required = true) int userid){
		
		User user = userService.findById(userid);
		
		if(user == null){
			return new ResponseEntity<>(new ErrorMessage("User does not exist"), HttpStatus.BAD_REQUEST);
		}
		
		List<Cart> products = cartService.findUserCartProducts(userid);
		CartProductCount count = new CartProductCount();
		
		if(products == null){
			count.setCount(0);
			return new ResponseEntity<CartProductCount>(count, HttpStatus.OK);
		}
		
		int totalProducts = 0;
		for(Cart cartRow : products){
			totalProducts += cartRow.getQuantity();
		}
		
		count.setCount(totalProducts);
		
		return new ResponseEntity<CartProductCount>(count, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/carts/{userid}/products/{productid}", method = RequestMethod.GET)
	public ResponseEntity<?> getUserCartProduct(@PathVariable(value = "userid", required = true) String userid, 
			@PathVariable(value = "productid", required = true) String productid){
		
		int usrId = Integer.parseInt(userid);
		int prodId = Integer.parseInt(productid);
		
		User user = userService.findById(usrId);
		
		if(user == null){
			return new ResponseEntity<>(new ErrorMessage("User does not exist"), HttpStatus.BAD_REQUEST);
		}
		
		if(!cartService.doesUserCartRowExist(usrId, prodId)){
			return new ResponseEntity<>(new ErrorMessage("Product does not exist"), HttpStatus.NOT_FOUND);
		}
		
		Cart cartRow = cartService.findUserCartRow(usrId, prodId);
		
		CartProduct cartProduct = new CartProduct();
		cartProduct.setUserid(cartRow.getId().getUserId());
		cartProduct.setProductid(cartRow.getId().getProductId());
		cartProduct.setName(cartRow.getProduct().getName());
		cartProduct.setBrand(cartRow.getProduct().getBrand().getName());
		cartProduct.setQuantity(cartRow.getQuantity());
		cartProduct.setPrice(cartRow.getProduct().getPrice());
		
		return new ResponseEntity<CartProduct>(cartProduct, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/carts/{userid}/products/{productid}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteUserCartProduct(@PathVariable(value = "userid", required = true) String userid, 
			@PathVariable(value = "productid", required = true) String productid){
		
		int usrId = Integer.parseInt(userid);
		int prodId = Integer.parseInt(productid);
		
		User user = userService.findById(usrId);
		
		if(user == null){
			return new ResponseEntity<>(new ErrorMessage("Unable to delete. User does not exist"), HttpStatus.BAD_REQUEST);
		}
		
		if(!cartService.doesUserCartRowExist(usrId, prodId)){
			return new ResponseEntity<>(new ErrorMessage("Unable to delete. Product does not exist"), HttpStatus.BAD_REQUEST);
		}
		
		if(cartService.deleteUserCartRowAndIsSuccess(usrId, prodId)){
			return new ResponseEntity<>(HttpStatus.OK);
		}
		
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@RequestMapping(value = "/carts/{userid}/products/{productid}", method = RequestMethod.PATCH)
	public ResponseEntity<?> updateCartProduct(@PathVariable(value = "userid", required = true) String userid, @PathVariable(value = "productid", required = true) String productid, 
			@RequestBody CartProduct cartProduct){
		
		int usrId = Integer.parseInt(userid);
		int prodId = Integer.parseInt(productid);
		
		User user = userService.findById(usrId);
		Product product = productService.findById(prodId);
		
		if(user == null){
			return new ResponseEntity<>(new ErrorMessage("Unable to create. User does not exist"), HttpStatus.BAD_REQUEST);
		}
		
		if(product == null){
			return new ResponseEntity<>(new ErrorMessage("Unable to create. Product does not exist"), HttpStatus.BAD_REQUEST);
		}
		
		if(cartProduct.getQuantity() < 0){
			return new ResponseEntity<>(new ErrorMessage("Unable to create. Quantity cannot be negative"), HttpStatus.BAD_REQUEST);
		}
		
		int oldQuantity = cartService.findUserCartRow(usrId, prodId).getQuantity();
		if(oldQuantity != cartProduct.getQuantity()){
			if(cartService.updateCartProductAndIsSuccess(usrId, prodId, cartProduct.getQuantity())){	
				return new ResponseEntity<>(HttpStatus.OK);	
			}else{
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);	
			}
		}
		
		return new ResponseEntity<>(HttpStatus.OK);	
	}
	
	@RequestMapping(value = "/carts/{userid}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteUserCart(@PathVariable(value = "userid", required = true) String userid){
		
		int usrId = Integer.parseInt(userid);
		User user = userService.findById(usrId);
		
		if(user == null){
			return new ResponseEntity<>(new ErrorMessage("Unable to delete. User does not exist"), HttpStatus.BAD_REQUEST);
		}
		
		if(cartService.findUserCartProducts(usrId).isEmpty()){
			return new ResponseEntity<>(new ErrorMessage("Unable to delete. Cart is empty"), HttpStatus.BAD_REQUEST);
		}
		
		if(cartService.deleteUserCartAndIsSuccess(usrId)){
			return new ResponseEntity<>(HttpStatus.OK);
		}
		
		return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
}
