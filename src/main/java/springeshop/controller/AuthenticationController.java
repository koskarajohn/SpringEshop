package springeshop.controller;

import java.security.Principal;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import springeshop.model.Session;
import springeshop.model.User;
import springeshop.model.UserCredentials;
import springeshop.service.UserService;
import springeshop.util.ErrorMessage;

@RestController
public class AuthenticationController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@RequestMapping(value = "/authentication/validateuser", method = RequestMethod.POST)
	public ResponseEntity<?> login(@RequestBody UserCredentials userCredentials){
		
		if(!userService.doesEmailExist(userCredentials.getEmail()))
			return new ResponseEntity<>(new ErrorMessage("Δεν υπάρχει λογαριασμός με αυτό το email"),HttpStatus.NOT_FOUND);
		
		User user = userService.findByEmail(userCredentials.getEmail());
		boolean doPasswordsMatch = passwordEncoder.matches(userCredentials.getPassword(), user.getPassword());
		
		if(!doPasswordsMatch)
			return new ResponseEntity<>(new ErrorMessage("Ο κωδικός δεν είναι σωστός"),HttpStatus.BAD_REQUEST);
		
		return new ResponseEntity<>(user, HttpStatus.OK);
	}

	@RequestMapping(value = "/authentication/session", method = RequestMethod.GET)
	public ResponseEntity<?> getSession(Principal principal, HttpSession session){
		User user = userService.findByUsername(principal.getName());
		
		Session userSession = new Session();
		userSession.setId(session.getId());
		userSession.setUsername(principal.getName());
		String userId= user != null ? Integer.toString(user.getId()) : "";
		userSession.setUserid(userId);
		String type = principal == null ? "anonymous" : "user";
		userSession.setType(type);
		return new ResponseEntity<>(userSession, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/authentication/logout", method = RequestMethod.POST)
	public ResponseEntity<?> logout(HttpSession session){
		session.invalidate();
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@RequestMapping(value = "/anonymous/session", method = RequestMethod.GET)
	public ResponseEntity<?> getSessionAnonymous(Principal principal, HttpSession session){
		boolean isAnonymous = principal == null ? true : false;
		
		if(isAnonymous){
			Session userSession = new Session();
			userSession.setId(session.getId());
			userSession.setUsername("");
			userSession.setUserid("");
			userSession.setType("anonymous");
			return new ResponseEntity<>(userSession, HttpStatus.OK);
		}
		
		return new ResponseEntity<>( HttpStatus.BAD_REQUEST);
	}
	
}
