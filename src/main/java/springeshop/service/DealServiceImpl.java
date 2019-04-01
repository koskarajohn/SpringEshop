package springeshop.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import springeshop.model.Deal;
import springeshop.repositories.DealRepository;

@Service("dealService")
@Transactional
public class DealServiceImpl implements DealService{
	
	@Autowired
	private DealRepository dealRepository;

	@Cacheable("mycache")
	@Override
	public List<Deal> findAllDeals() {
		return dealRepository.findAll();
	}

}
