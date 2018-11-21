package springeshop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import springeshop.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{

	User findById(int id);
	User findByUsername(String userName);
	User findByEmail(String email);
}
