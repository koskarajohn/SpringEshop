package springeshop.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import springeshop.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{

	Product findById(int id);
	Product findByName(String name);
	List<Product> findByCategoryId(int id);
}
