package springeshop.controller;

import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

	@RequestMapping(value = "authenticate", method = RequestMethod.POST)
	public String getSession(HttpSession session){
		return session.getId();
	}
	
}
