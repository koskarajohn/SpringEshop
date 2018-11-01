package springeshop.service;

import java.util.List;

import org.springframework.data.repository.query.Param;

import springeshop.model.Brand;
import springeshop.model.Product;
import springeshop.model.ProductImage;

public interface ProductService {

	Product findById(int id);
	Product findByName(String name);
	void saveProduct(Product product);
	void updateProduct(Product product);
	void deleteProductById(int id);
	void deleteAllProducts();
	List<Product> findAllProducts();
	boolean doesProductExist(Product product);
	
	ProductImage findByProductId(int id);
	List<Product> findByCategoryIdOrderByPriceAsc(int id);
	List<Product> findByCategoryIdOrderByPriceDesc(int id);
	List<Brand> findCategoryBrands(int id);
	List<Product> findByCategoryIdAndBrandId(int categoryId, int brandId);
	int findNumberOfProductsOfBrandInCategory(int categoryid, int brandid);
	int findNumberOfProductsWithinPriceRange(int categoryid, double min, double max);
}
