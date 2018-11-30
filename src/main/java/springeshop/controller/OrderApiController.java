package springeshop.controller;

import java.io.Console;
import java.security.Principal;
import java.sql.Timestamp;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import springeshop.model.Order;
import springeshop.model.OrderDetails;
import springeshop.model.User;
import springeshop.repositories.ShippingInfoRepository;
import springeshop.service.BillingInfoService;
import springeshop.service.OrderService;
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
	private UserService userService;
	
	@Autowired
	private ShippingInfoService shippingInfoService;
	
	@Autowired
	private ShippingInfoRepository repository;
	
	@Autowired
	private BillingInfoService billingInfoService;
	
	@RequestMapping(value = "/orders", method = RequestMethod.POST)
	public ResponseEntity<?> createOrder(@Valid @RequestBody OrderDetails orderDetails, Principal principal){
		logger.info("Creating order ");
		
		//boolean isAnonymous = principal == null ? true : false;
		
		//if(isAnonymous && orderDetails.getEmail() == null){
		//	return new ResponseEntity<>(new ErrorMessage("Email was not provided"), HttpStatus.BAD_REQUEST);
		//}
		boolean swag = false;
		try{
			swag = true;
			repository.deleteById(10);
			
		}catch(DataAccessException ex){
			System.out.println(ex);
		}
		
		System.out.println(swag);
		
		//shippingInfoService.saveShippingInfo(orderDetails.getShipping_info());
		//billingInfoService.saveBillingInfo(orderDetails.getBilling_info());
		
		//Order order = new Order();
		
		//if(!isAnonymous){
		//	User user = userService.findByUsername(principal.getName());
		//	order.setUser(user);
		//}
		
		//.setStatus("Created");
		//Timestamp currentDate = new Timestamp(System.currentTimeMillis());
		//order.setOrder_date(currentDate);
		//order.setShippingInfo(orderDetails.getShipping_info());
		//order.setBillingInfo(orderDetails.getBilling_info());
		
		//orderService.saveOrder(order);
		
		return new ResponseEntity<>( HttpStatus.CREATED);
	}
}
