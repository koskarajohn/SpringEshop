package springeshop.service;

import springeshop.model.User;

public interface UserService {

	User findByUsername(String userName);
	User findByEmail(String email);
	boolean doesEmailExist(User user);
	boolean doesUserExist(User user);
	boolean doesUserExist(String username);
	void addUser(User user);
}
