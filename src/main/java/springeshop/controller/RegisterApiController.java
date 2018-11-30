package springeshop.controller;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

import springeshop.model.Authority;
import springeshop.model.User;
import springeshop.service.AuthorityService;
import springeshop.service.UserService;
import springeshop.util.ErrorMessage;

@RestController
@RequestMapping("/api")
public class RegisterApiController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private AuthorityService authorityService;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	public static final Logger logger = LoggerFactory.getLogger(RegisterApiController.class);
	
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> registerUser(@Valid @RequestBody User user){
		logger.info("Register user : {}", user);
		
		if(userService.doesUserExist(user)){
			logger.error("Unable to register. A user with name {} already exist", user.getUsername());
			return new ResponseEntity(new ErrorMessage("Unable to create. A user with username " + user.getUsername() + " already exists."), HttpStatus.CONFLICT);
		}
		
		if(userService.doesEmailExist(user)){
			logger.error("Unable to register. A user with email {} already exist", user.getEmail());
			return new ResponseEntity(new ErrorMessage("Unable to create. A user with email " + user.getEmail() + " already exists."), HttpStatus.CONFLICT);
		}
		
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		user.setIs_active(true);
		userService.addUser(user);
		if(userService.doesUserExist(user)){
			Authority authority = new Authority();
			authority.setUser(user);
			authority.setRole("ROLE_USER");
			authorityService.saveAuthority(authority);
		}else {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		return new ResponseEntity<>(user, HttpStatus.CREATED);
	}
}
