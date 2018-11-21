package springeshop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import springeshop.model.User;
import springeshop.repositories.UserRepository;

@Service("userService")
@Transactional
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public User findByUsername(String userName) {
		return userRepository.findByUsername(userName);
	}
	
	@Override
	public User findByEmail(String email) {
		return userRepository.findByEmail(email);
	}

	@Override
	public void addUser(User user) {
		userRepository.save(user);
	}

	@Override
	public boolean doesUserExist(User user) {
		return findByUsername(user.getUsername()) != null;
	}

	@Override
	public boolean doesEmailExist(User user) {
		return findByEmail(user.getEmail()) != null;
	}

	@Override
	public boolean doesUserExist(String username) {
		return findByUsername(username) != null;
	}

	@Override
	public boolean doesEmailExist(String userEmail) {
		return findByEmail(userEmail) != null;
	}

	@Override
	public User findById(int id) {
		return userRepository.findById(id);
	}

}
