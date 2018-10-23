package springeshop.service;

import java.util.List;

import springeshop.model.Deal;
import springeshop.model.DealImage;

public interface DealService {

	Deal findById(int id);
	Deal findByName(String name);
	DealImage findByDealId(int id);
	List<Deal> findAllDeals();
}
