package springeshop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import springeshop.model.BillingInfo;
import springeshop.repositories.BillingInfoRepository;

@Service("billingInfoService")
@Transactional
public class BillingInfoServiceImpl implements BillingInfoService{

	@Autowired
	private BillingInfoRepository billingInfoRepository;

	@Override
	public boolean saveBillingInfoAndIsSuccess(BillingInfo billingInfo) {
		boolean isSuccess = false;
		
		try{
			billingInfoRepository.save(billingInfo);
			isSuccess = true;
		}catch(DataAccessException exception){
			System.out.println(exception);
			isSuccess = false;
		}
		
		return isSuccess;
	}
	
	
}
