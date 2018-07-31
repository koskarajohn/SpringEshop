package springeshop.service;

import java.util.List;

import springeshop.model.Product;

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
}
