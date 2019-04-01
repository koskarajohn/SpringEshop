package springeshop.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import springeshop.model.Deal;
import springeshop.model.DealImage;
import springeshop.repositories.DealImageRepository;

@Service("dealImageService")
@Transactional
public class DealImageServiceImpl implements DealImageService{

	@Autowired
	private DealImageRepository dealImageRepository;
	
	@Cacheable(value = "mycache", key = "#deal.id")
	@Override
	public DealImage findByDeal(Deal deal) {
		return dealImageRepository.findByDeal(deal);
	}

}
