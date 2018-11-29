package springeshop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import springeshop.model.ShippingInfo;
import springeshop.repositories.ShippingInfoRepository;

@Service("shippingInfoService")
@Transactional
public class ShippingInfoServiceImpl implements ShippingInfoService{

	@Autowired
	private ShippingInfoRepository shippingInfoRepository;
	
	@Override
	public void saveShippingInfo(ShippingInfo shippingInfo) {
		shippingInfoRepository.save(shippingInfo);
	}

}
