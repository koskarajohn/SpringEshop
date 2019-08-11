package springeshop.service;

import java.util.List;

import springeshop.model.Product;
import springeshop.model.Review;

public interface ReviewService {

	List<Review> findByProduct(Product product);
	void saveReview(Review review);
}
