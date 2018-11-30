package springeshop.service;

import springeshop.model.User;

public interface UserService {

	User findById(int id);
	User findByUsername(String userName);
	User findByEmail(String email);
	boolean doesEmailExist(User user);
	boolean doesEmailExist(String userEmail);
	boolean doesUserExist(User user);
	boolean doesUserExist(String username);
	boolean addUserAndIsSuccess(User user);
}
