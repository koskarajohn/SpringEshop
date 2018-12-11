package springeshop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import springeshop.model.Deal;
import springeshop.model.DealImage;

@Repository
public interface DealImageRepository extends JpaRepository<DealImage, Integer>{

	DealImage findByDeal(Deal deal);
}
