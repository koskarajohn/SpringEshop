package springeshop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import springeshop.model.Authority;
import springeshop.model.User;

public interface AuthorityRepository extends JpaRepository<Authority, Integer>{
	
	Authority findByUser(User user);
}
