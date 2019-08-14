package springeshop.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springeshop.model.Product;
import springeshop.model.Review;

public interface ReviewRepository extends JpaRepository<Review, Integer>{

	List<Review> findByProduct(Product product);
	
	@Query("SELECT avg(review.rating)"
		 + "FROM Review review "
		 + "WHERE review.product = :product")
	Double findAverageRating(@Param("product") Product product);
}
