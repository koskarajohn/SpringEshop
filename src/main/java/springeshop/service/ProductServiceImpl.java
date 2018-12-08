package springeshop.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.persistence.criteria.Order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import springeshop.model.Brand;
import springeshop.model.Category;
import springeshop.model.Product;
import springeshop.model.ProductImage;
import springeshop.model.ProductPage;
import springeshop.repositories.ProductRepository;

@Service("productService")
@Transactional
public class ProductServiceImpl implements ProductService{
	
	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private EntityManager entityManager;
	
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

	@Override
	public ProductPage findByCategoryIdWithBrandAndPriceRange(Category category, List<Brand> brands , String[] priceRanges, int page, String order) {
		ProductPage productPage = new ProductPage();
		
		CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
	    CriteriaQuery<Product> criteriaQuery = criteriaBuilder.createQuery(Product.class);
	 
	    Root<Product> productsRoot = criteriaQuery.from(Product.class);
	    List<Predicate> predicateList = new ArrayList<>();
	    
	    Predicate categoryPredicate = criteriaBuilder.equal(productsRoot.get("category"), category);
	    Order orderCriterion = order.equals("asc") ? criteriaBuilder.asc(productsRoot.get("price")) : criteriaBuilder.desc(productsRoot.get("price"));
	    
	    for(int i=0; i < brands.size(); i++){
	    	predicateList.add(criteriaBuilder.equal(productsRoot.get("brand"), brands.get(i)));
	    }
	    
	    Predicate[] brandsPredicateArray = new Predicate[predicateList.size()];
	    predicateList.toArray(brandsPredicateArray);
	    Predicate brandsPredicate = criteriaBuilder.or(brandsPredicateArray);
	    
	    criteriaQuery.where(criteriaBuilder.and(categoryPredicate, brandsPredicate));
	    criteriaQuery.orderBy(orderCriterion);
	    
	    int totalProducts = entityManager.createQuery(criteriaQuery).getResultList().size();
	    int startProductPosition = page * 6;
	    productPage.setTotalElements(totalProducts);
	    productPage.setTotalPages(getProductPages(totalProducts));
	    productPage.setContent(entityManager.createQuery(criteriaQuery).setFirstResult(startProductPosition).setMaxResults(6).getResultList());
	    return productPage;
	}

	private int getProductPages(int numberOfProducts){
		return (int) Math.ceil(numberOfProducts / 6.0);
	}

}
