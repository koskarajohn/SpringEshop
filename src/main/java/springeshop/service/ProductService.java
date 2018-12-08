package springeshop.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import springeshop.model.Brand;
import springeshop.model.Category;
import springeshop.model.Product;
import springeshop.model.ProductImage;
import springeshop.model.ProductPage;

public interface ProductService {

	Product findById(int id);
	Product findByName(String name);
	void saveProduct(Product product);
	void updateProduct(Product product);
	void deleteProductById(int id);
	boolean doesProductExist(Product product);
	
	ProductImage findByProductId(int id);
	Page<Product> findByCategoryId(int id, Pageable pageable);
	ProductPage findByCategoryIdWithBrandAndPriceRange(Category category, List<Brand> brands, String[] priceRanges, int page, String order);
	Page<Product> findFavoriteProducts(Pageable pageable);
    Page<Product> findNewProducts(Pageable pageable);
	List<Brand> findCategoryBrands(int id);
	List<Product> findByCategoryIdAndBrandId(int categoryId, int brandId);
	int findNumberOfProductsInCategory(int categoryid);
	int findNumberOfProductsOfBrandInCategory(int categoryid, int brandid);
	int findNumberOfProductsWithinPriceRange(int categoryid, double min, double max);
}
