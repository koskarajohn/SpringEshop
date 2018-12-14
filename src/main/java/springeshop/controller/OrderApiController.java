package springeshop.controller;

import java.security.Principal;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import springeshop.model.CartProduct;
import springeshop.model.Order;
import springeshop.model.OrderDetails;
import springeshop.model.OrderProduct;
import springeshop.model.OrderProductPrimaryKey;
import springeshop.model.User;
import springeshop.repositories.ShippingInfoRepository;
import springeshop.service.BillingInfoService;
import springeshop.service.EmailService;
import springeshop.service.OrderProductService;
import springeshop.service.OrderService;
import springeshop.service.ProductService;
import springeshop.service.ShippingInfoService;
import springeshop.service.UserService;
import springeshop.util.ErrorMessage;

@RestController
@RequestMapping("/api")
public class OrderApiController {
	
	public static final Logger logger = LoggerFactory.getLogger(OrderApiController.class);

	@Autowired
	private OrderService orderService;
	
	@Autowired
	private OrderProductService orderProductService;
	
	@Autowired
	private ProductService productService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private ShippingInfoService shippingInfoService;
	
	@Autowired
	private BillingInfoService billingInfoService;
	
	@Autowired
	private EmailService emailService;
	
	@RequestMapping(value = "/orders", method = RequestMethod.POST)
	public ResponseEntity<?> createOrder(@Valid @RequestBody OrderDetails orderDetails, Principal principal){
		logger.info("Creating order ");
		
		boolean isAnonymous = principal == null ? true : false;
		if(isAnonymous && orderDetails.getEmail() == null){
			return new ResponseEntity<>(new ErrorMessage("Email was not provided"), HttpStatus.BAD_REQUEST);
		}
		
		if(shippingInfoService.saveShippingInfoAndIsSuccess(orderDetails.getShipping_info()) && 
				billingInfoService.saveBillingInfoAndIsSuccess(orderDetails.getBilling_info())){
			
			Order order = new Order();
			if(!isAnonymous){
				User user = userService.findByUsername(principal.getName());
				order.setUser(user);
			}
			
			order.setEmail(orderDetails.getEmail());
			order.setStatus("Created");
			Timestamp currentDate = new Timestamp(System.currentTimeMillis());
			order.setOrder_date(currentDate);
			order.setShippingInfo(orderDetails.getShipping_info());
			order.setBillingInfo(orderDetails.getBilling_info());
			
			if(orderService.saveOrderAndIsSuccess(order)){
				
				List<OrderProduct> orderProducts = new ArrayList<>();
				for(CartProduct cartProduct : orderDetails.getCartProducts()){
					OrderProduct orderProduct = new OrderProduct();
					OrderProductPrimaryKey id = new OrderProductPrimaryKey(order.getId(), cartProduct.getProductid());
					orderProduct.setId(id);
					orderProduct.setOrder(order);
					orderProduct.setProduct(productService.findById(cartProduct.getProductid()));
					orderProduct.setQuantity(cartProduct.getQuantity());
					orderProducts.add(orderProduct);
				}
					
				if(orderProductService.saveOrderProducts(orderProducts)){
					emailService.sendEmail(order, orderDetails.getCartProducts());
					return new ResponseEntity<Order>(order,  HttpStatus.CREATED);
				}
				
			}
		}
		
		return new ResponseEntity<>( HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
