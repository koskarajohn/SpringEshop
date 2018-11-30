package springeshop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
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
	public boolean saveShippingInfoAndIsSuccess(ShippingInfo shippingInfo) {
		boolean isSuccess = false;
		
		try{
			shippingInfoRepository.save(shippingInfo);
			isSuccess = true;
		}catch(DataAccessException exception){
			System.out.print(exception);
			isSuccess = false;
		}
		
		return isSuccess;
	}

}
