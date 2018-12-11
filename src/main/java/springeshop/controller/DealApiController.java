package springeshop.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import springeshop.model.Deal;
import springeshop.model.DealImage;
import springeshop.service.DealImageService;
import springeshop.service.DealService;

@RestController
@RequestMapping("/api")
public class DealApiController {
	
	@Autowired
	private DealService dealService;
	
	@Autowired
	private DealImageService dealImageService;

	public static final Logger logger = LoggerFactory.getLogger(DealApiController.class);
	
	@RequestMapping(value = "/deals", method = RequestMethod.GET)
	public ResponseEntity<?> listDeals(){
		List<Deal> deals = dealService.findAllDeals();
		
		if(deals.isEmpty()){
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		}
		
		for(Deal deal : deals){
			DealImage dealImage = dealImageService.findByDeal(deal);
			deal.setImageUrl(dealImage.getUrl());
		}
		
		return new ResponseEntity<List<Deal>>(deals, HttpStatus.OK);
	}
}
