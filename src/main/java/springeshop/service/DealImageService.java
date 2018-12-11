package springeshop.service;

import springeshop.model.Deal;
import springeshop.model.DealImage;

public interface DealImageService {

	DealImage findByDeal(Deal deal);
}
