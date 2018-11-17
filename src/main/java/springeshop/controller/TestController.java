package springeshop.controller;

import java.security.Principal;

import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/anonymous")
public class TestController {

	@RequestMapping(value = "/session", method = RequestMethod.GET)
	public ResponseEntity<?> getSessionAnonymous(Principal principal, HttpSession session){
		session.getId();
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
