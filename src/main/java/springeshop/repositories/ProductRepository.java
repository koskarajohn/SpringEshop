package springeshop.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import springeshop.model.Brand;
import springeshop.model.Product;
import springeshop.model.ProductImage;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{

	Product findById(int id);
	Product findByName(String name);
	
	//Products
	List<Product> findByCategoryIdOrderByPriceAsc(int id);
	List<Product> findByCategoryIdAndBrandId(int categoryId, int brandId);
	
	@Query("select prod from Product prod where prod.is_favorite = true")
	Page<Product> findFavoriteProducts(Pageable pageable);
	
	@Query("select prod from Product prod where prod.is_new = true")
	Page<Product> findNewProducts(Pageable pageable);
	
	//Brands
	@Query("select DISTINCT prod.brand from Product prod where prod.category.id = :id")
	List<Brand> findCategoryBrands(@Param("id") int id);
	
	//ProductImages
	@Query("select pi from ProductImage pi INNER JOIN pi.product pr where pi.product.id = :id")
	ProductImage findByProductId(@Param("id") int id);
	
	//Count
	@Query("select Count (prod) from Product prod where prod.category.id = :categoryid")
	int findNumberOfProductsInCategory(@Param("categoryid") int categoryid);
	
	@Query("select Count (prod) from Product prod where prod.category.id = :categoryid and prod.brand.id = :brandid")
	int findNumberOfProductsOfBrandInCategory(@Param("categoryid") int categoryid, @Param("brandid") int brandid);
	
	@Query("select Count (prod) from Product prod where prod.category.id = :categoryid and prod.price between :min and :max")
	int findNumberOfProductsWithinPriceRange(@Param("categoryid") int categoryid, @Param("min") double min, @Param("max") double max);
}
