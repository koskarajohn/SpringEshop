package springeshop.controller;

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

import springeshop.model.OrderDetails;
import springeshop.model.User;
import springeshop.repositories.OrderRepository;

@RestController
@RequestMapping("/api")
public class OrderApiController {
	
	public static final Logger logger = LoggerFactory.getLogger(OrderApiController.class);

	@Autowired
	private OrderRepository orderRepository;
	
	@RequestMapping(value = "/orders", method = RequestMethod.POST)
	public ResponseEntity<?> create(@Valid @RequestBody OrderDetails orderDetails){
		logger.info("Creating order ");
		

		
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
}
