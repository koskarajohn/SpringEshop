package springeshop.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import springeshop.model.Product;
import springeshop.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Integer>{

	List<Review> findByProduct(Product product);
}
