package springeshop.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
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
	public void saveAuthority(Authority authority) {
		authorityRepository.save(authority);
	}

	@Override
	public boolean doesAuthorityExist(User user) {
		return authorityRepository.findByUser(user) != null;
	}

}
