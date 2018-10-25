package springeshop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import springeshop.model.Deal;
import springeshop.model.DealImage;

@Repository
public interface DealRepository extends JpaRepository<Deal, Integer>{

	Deal findById(int id);
	Deal findByName(String name);
	
	@Query("select di from DealImage di INNER JOIN di.deal de where di.deal.id = :id")
	DealImage findByDealId(@Param("id") int id);
}
