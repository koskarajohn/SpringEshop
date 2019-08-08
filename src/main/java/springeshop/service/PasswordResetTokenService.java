package springeshop.service;

import springeshop.model.PasswordResetToken;
import springeshop.model.User;;

public interface PasswordResetTokenService {

	void saveToken(PasswordResetToken token);
	PasswordResetToken findByUser(User user);
	PasswordResetToken findByToken(String token);
	void deleteToken(PasswordResetToken token);
}
