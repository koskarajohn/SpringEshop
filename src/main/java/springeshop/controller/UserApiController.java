package springeshop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import springeshop.service.UserService;

@RestController
@RequestMapping("/api")
public class UserApiController {

	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "/users", method = RequestMethod.GET)
	public ResponseEntity<?> doesUserExist(@RequestParam(value = "doesuserexist") String user){
		return new ResponseEntity<>(userService.doesUserExist(user), HttpStatus.OK);
	}
}
