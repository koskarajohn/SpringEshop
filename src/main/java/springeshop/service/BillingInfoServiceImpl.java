package springeshop.service;

import org.springframework.beans.factory.annotation.Autowired;
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
	public void saveBillingInfo(BillingInfo billingInfo) {
		billingInfoRepository.save(billingInfo);
	}
	
	
}
