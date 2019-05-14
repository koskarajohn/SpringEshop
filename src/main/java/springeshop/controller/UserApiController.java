package springeshop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springeshop.model.User;
import springeshop.model.UserData;
import springeshop.service.UserService;

@RestController
@RequestMapping("/api")
public class UserApiController {

	
	@Autowired
	private UserService userService;
	
	@GetMapping("/users/{id}")
	public ResponseEntity<?> getUser(@PathVariable("id") String id){
		
		User user = userService.findById(Integer.parseInt(id));
		
		if(user == null){
			return ResponseEntity.badRequest().build();
		}
		
		UserData userData = new UserData();
		userData.setEmail(user.getEmail());
		userData.setFirst_name(user.getFirst_name());
		userData.setLast_name(user.getLast_name());
		userData.setPhone(user.getPhone());
		return ResponseEntity.ok(userData);
	}
}
