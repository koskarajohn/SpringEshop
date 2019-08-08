package springeshop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import springeshop.model.PasswordResetToken;
import springeshop.model.User;

@Repository
public interface PasswordResetTokenRepository extends JpaRepository<PasswordResetToken, Integer>{

	PasswordResetToken findByUser(User user);
	PasswordResetToken findByToken(String token);
}
