package springeshop.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import springeshop.model.Product;
import springeshop.model.ProductImage;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{

	Product findById(int id);
	Product findByName(String name);
	List<Product> findByCategoryId(int id);
	
	@Query("select pi from ProductImage pi INNER JOIN pi.product pr where pi.id = :id")
	ProductImage findByProductId(@Param("id") int id);
}
