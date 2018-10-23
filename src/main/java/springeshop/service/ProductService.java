package springeshop.service;

import java.util.List;

import org.springframework.data.repository.query.Param;

import springeshop.model.Product;
import springeshop.model.ProductImage;

public interface ProductService {

	Product findById(int id);
	Product findByName(String name);
	List<Product> findByCategoryId(int id);
	void saveProduct(Product product);
	void updateProduct(Product product);
	void deleteProductById(int id);
	void deleteAllProducts();
	List<Product> findAllProducts();
	boolean doesProductExist(Product product);
	ProductImage findByProductId(int id);
}
