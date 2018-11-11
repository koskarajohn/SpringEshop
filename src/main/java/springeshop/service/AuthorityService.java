package springeshop.service;

import springeshop.model.Authority;
import springeshop.model.User;

public interface AuthorityService {

	void saveAuthority(Authority authority);
	boolean doesAuthorityExist(User user);
}
