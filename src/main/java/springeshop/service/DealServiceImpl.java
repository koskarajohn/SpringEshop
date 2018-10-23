package springeshop.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springeshop.model.Deal;
import springeshop.model.DealImage;
import springeshop.repositories.DealRepository;

@Service("dealService")
@Transactional
public class DealServiceImpl implements DealService{
	
	@Autowired
	private DealRepository dealRepository;

	@Override
	public Deal findById(int id) {
		return dealRepository.findById(id);
	}

	@Override
	public Deal findByName(String name) {
		return dealRepository.findByName(name);
	}

	@Override
	public DealImage findByDealId(int id) {
		return dealRepository.findByDealId(id);
	}

	@Override
	public List<Deal> findAllDeals() {
		return dealRepository.findAll();
	}

}
