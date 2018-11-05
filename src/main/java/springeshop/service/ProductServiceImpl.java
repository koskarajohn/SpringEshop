package springeshop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import springeshop.model.Brand;
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
	public boolean doesProductExist(Product product) {
		return findByName(product.getName()) != null;
	}

	@Override
	public ProductImage findByProductId(int id) {
		return productRepository.findByProductId(id);
	}

	@Override
	public Page<Product> findByCategoryId(int id, Pageable pageable) {
		return productRepository.findByCategoryId(id, pageable);
	}

	@Override
	public List<Brand> findCategoryBrands(int id) {
		return productRepository.findCategoryBrands(id);
	}

	@Override
	public List<Product> findByCategoryIdAndBrandId(int categoryId, int brandId) {
		return productRepository.findByCategoryIdAndBrandId(categoryId, brandId);
	}

	@Override
	public int findNumberOfProductsOfBrandInCategory(int categoryid, int brandid) {
		return productRepository.findNumberOfProductsOfBrandInCategory(categoryid, brandid);
	}

	@Override
	public int findNumberOfProductsWithinPriceRange(int categoryid, double min, double max) {
		return productRepository.findNumberOfProductsWithinPriceRange(categoryid, min, max);
	}



	@Override
	public int findNumberOfProductsInCategory(int categoryid) {
		return findNumberOfProductsInCategory(categoryid);
	}

	@Override
	public Page<Product> findFavoriteProducts(Pageable pageable) {
		return productRepository.findFavoriteProducts(pageable);
	}

	@Override
	public Page<Product> findNewProducts(Pageable pageable) {
		return productRepository.findNewProducts(pageable);
	}

	

}
