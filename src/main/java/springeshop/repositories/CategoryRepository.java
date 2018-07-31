package springeshop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import springeshop.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer>{
	
	Category findById(int id);
	Category findByName(String name);
}
