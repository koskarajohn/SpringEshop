package springeshop.controller;

import java.time.Clock;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.UUID;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import springeshop.model.ChangePasswordRequest;
import springeshop.model.PasswordResetToken;
import springeshop.model.ResetPasswordRequest;
import springeshop.model.User;
import springeshop.model.UserData;
import springeshop.service.EmailService;
import springeshop.service.PasswordResetTokenService;
import springeshop.service.UserService;

@RestController
@RequestMapping("/api")
public class UserApiController {

	
	@Autowired
	private UserService userService;
	
	@Autowired
	private PasswordResetTokenService passwordResetTokenService;
	
	@Autowired
	private EmailService emailService;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
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
		
		PasswordResetToken existingToken = passwordResetTokenService.findByUser(user);
		if(existingToken != null) {
			if(isTokenExpired(existingToken)) {
				try {
					existingToken.setToken(UUID.randomUUID().toString());
					existingToken.setExpiryDate(getTomorrow());
					passwordResetTokenService.saveToken(existingToken);
					emailService.sendResetPasswordEmail(user, "http://localhost:8080/api/user/changePassword?" + existingToken.getToken());
					return new ResponseEntity<>(HttpStatus.CREATED);
				} catch (DataAccessException e) {
					throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
				}
			}else{
				emailService.sendResetPasswordEmail(user, "http://localhost:8080/api/user/changePassword?" + existingToken.getToken());
				return new ResponseEntity<>(HttpStatus.CREATED);
			}
		}
		
		try {
			PasswordResetToken token = new PasswordResetToken();
			token.setUser(user);
			token.setToken(UUID.randomUUID().toString());
			token.setExpiryDate(getTomorrow());
			passwordResetTokenService.saveToken(token);
			emailService.sendResetPasswordEmail(user, "http://localhost:8080/api/user/changePassword?" + token);
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (DataAccessException e) {
			throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	private LocalDateTime getToday() {
		return LocalDateTime.now(Clock.offset(Clock.systemUTC(), Duration.ofHours(3)));
	}

	private LocalDateTime getTomorrow() {
		LocalDateTime now  = getToday();
		LocalDateTime expiryDate = now.plusDays(1);
		return expiryDate;
	}
	
	private boolean isTokenExpired(PasswordResetToken token) {
		return !token.getExpiryDate().isAfter(getToday());
	}
	
	@PostMapping("/user/changePassword")
	public ResponseEntity<?> changePassword(@RequestBody ChangePasswordRequest request, @RequestParam(value = "token") String tokenParam){
		
		PasswordResetToken token = passwordResetTokenService.findByToken(tokenParam);
		
		if(token == null)
			return ResponseEntity.badRequest().build();
		
		
		if(!token.getExpiryDate().isAfter(LocalDateTime.now()))
			return ResponseEntity.status(401).build();
		
		User user = token.getUser();
		user.setPassword(passwordEncoder.encode(request.getPassword()));
		if(userService.addUserAndIsSuccess(user)) {
			passwordResetTokenService.deleteToken(token);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}else {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
			
	}
}
