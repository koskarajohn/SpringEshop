package springeshop.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import springeshop.model.Authority;
import springeshop.model.User;
import springeshop.repositories.AuthorityRepository;

@Service("authorityService")
@Transactional
public class AuthorityServiceImpl implements AuthorityService{

	@Autowired
	private AuthorityRepository authorityRepository;
	
	@Override
	public boolean saveAuthorityAndIsSuccess(Authority authority) {
        boolean isSuccess = false;
		
		try {
			authorityRepository.save(authority);
			isSuccess = true;
		} catch (DataAccessException exception) {
			System.out.println(exception);
			isSuccess = false;
		}
		
		return isSuccess;
	}

}
