package springeshop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import springeshop.model.Product;
import springeshop.model.ProductImage;
import springeshop.repositories.ProductRepository;

@Service("productService")
@Transactional
public class ProductServiceImpl implements ProductService{
	
	@Autowired
	private ProductRepository productRepository;

	@Override
	public Product findById(int id) {
		return productRepository.findById(id);
	}

	@Override
	public Product findByName(String name) {
		return productRepository.findByName(name);
	}
	
	@Override
	public List<Product> findByCategoryId(int id) {
		return productRepository.findByCategoryId(id);
	}

	@Override
	public void saveProduct(Product product) {
		productRepository.save(product);
	}

	@Override
	public void updateProduct(Product product) {
		saveProduct(product);
	}

	@Override
	public void deleteProductById(int id) {
		productRepository.deleteById(id);
	}

	@Override
	public void deleteAllProducts() {
		productRepository.deleteAll();
	}

	@Override
	public List<Product> findAllProducts() {
		return productRepository.findAll();
	}

	@Override
	public boolean doesProductExist(Product product) {
		return findByName(product.getName()) != null;
	}

	@Override
	public ProductImage findByProductId(int id) {
		return productRepository.findByProductId(id);
	}

	

}
