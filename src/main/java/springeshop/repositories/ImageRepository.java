package springeshop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import springeshop.model.Image;

@Repository
public interface ImageRepository extends JpaRepository<Image, Integer>{

}
