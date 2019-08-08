package springeshop.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springeshop.model.PasswordResetToken;
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

}
