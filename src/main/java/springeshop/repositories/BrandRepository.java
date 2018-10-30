package springeshop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import springeshop.model.Brand;

@Repository
public interface BrandRepository extends JpaRepository<Brand, Integer>{

	Brand findByName(String name);
}
