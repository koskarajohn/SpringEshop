package springeshop.controller;

import java.time.LocalDateTime;
import java.util.UUID;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import springeshop.model.PasswordResetToken;
import springeshop.model.ResetPasswordRequest;
import springeshop.model.User;
import springeshop.model.UserData;
import springeshop.service.PasswordResetTokenService;
import springeshop.service.UserService;

@RestController
@RequestMapping("/api")
public class UserApiController {

	
	@Autowired
	private UserService userService;
	
	@Autowired
	private PasswordResetTokenService passwordResetTokenService;
	
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
	
	@PostMapping("/user/resetPassword")
	public ResponseEntity<?> resetPassword(@Valid @RequestBody ResetPasswordRequest request){
		
		User user = userService.findByEmail(request.getEmail());
		
		if(user == null){
			return ResponseEntity.badRequest().build();
		}
		
		try {
			PasswordResetToken token = new PasswordResetToken();
			token.setUser(user);
			token.setToken(UUID.randomUUID().toString());
			
			LocalDateTime now  = LocalDateTime.now();
			LocalDateTime expiryDate = now.plusDays(1);
			token.setExpiryDate(expiryDate);
			passwordResetTokenService.saveToken(token);
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (DataAccessException e) {
			throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
