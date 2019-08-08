package springeshop.service;

import springeshop.model.PasswordResetToken;;

public interface PasswordResetTokenService {

	void saveToken(PasswordResetToken token);
}
