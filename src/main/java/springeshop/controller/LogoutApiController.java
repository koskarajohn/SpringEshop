package springeshop.controller;

import javax.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LogoutApiController {
	 
	
	 @RequestMapping(value = "/logout", method = RequestMethod.POST)
	 public ResponseEntity<?> logout(HttpSession session){
		 session.invalidate();
		 return new ResponseEntity<>(HttpStatus.OK);
	 }
}
