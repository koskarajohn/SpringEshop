package springeshop.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springeshop.model.Product;
import springeshop.model.Review;
import springeshop.repositories.ReviewRepository;

@Transactional
@Service("reviewService")
public class ReviewServiceImpl implements ReviewService{
	
	@Autowired
	private ReviewRepository reviewRepository;

	@Override
	public List<Review> findByProduct(Product product) {
		return reviewRepository.findByProduct(product);
	}

	@Override
	public void saveReview(Review review) {
		reviewRepository.save(review);
	}

	@Override
	public Double findAverageRating(Product product) {
		return reviewRepository.findAverageRating(product);
	}

}
