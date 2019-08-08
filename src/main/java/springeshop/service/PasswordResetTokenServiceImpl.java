package springeshop.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springeshop.model.PasswordResetToken;
import springeshop.model.User;
import springeshop.repositories.PasswordResetTokenRepository;

@Service("passwordResetTokenService")
@Transactional
public class PasswordResetTokenServiceImpl implements PasswordResetTokenService{
	
	@Autowired
	private PasswordResetTokenRepository passwordResetTokenRepository;
	

	@Override
	public void saveToken(PasswordResetToken token) {
		passwordResetTokenRepository.save(token);
	}

	@Override
	public PasswordResetToken findByUser(User user) {
		return passwordResetTokenRepository.findByUser(user);
	}

	@Override
	public PasswordResetToken findByToken(String token) {
		return passwordResetTokenRepository.findByToken(token);
	}

	@Override
	public void deleteToken(PasswordResetToken token) {
		passwordResetTokenRepository.delete(token);
	}

}
