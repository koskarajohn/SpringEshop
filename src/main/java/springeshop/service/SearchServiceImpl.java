package springeshop.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import springeshop.model.Brand;
import springeshop.model.Product;
import springeshop.model.ProductPage;

@Service("searchService")
@Transactional
public class SearchServiceImpl implements SearchService{
	
	@Autowired
	private EntityManager entityManager;

	@Override
	public ProductPage findBySearchTerms(String[] searchTerms, int page) {
		ProductPage productPage = new ProductPage();
		
		CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
	    CriteriaQuery<Product> criteriaQuery = criteriaBuilder.createQuery(Product.class);
	    
	    Root<Product> productsRoot = criteriaQuery.from(Product.class);
	    List<Predicate> searchPredicatesList = new ArrayList<>();
	    
	    if(searchTerms.length > 0){
	    	for(String term : searchTerms){
	    		searchPredicatesList.add(criteriaBuilder.like(productsRoot.get("name"), "%" + term +"%"));
	    	}
	    }
	    
	    Predicate[] searchPredicatesArray = new Predicate[searchPredicatesList.size()];
	    searchPredicatesList.toArray(searchPredicatesArray);
	    
	    Predicate searchPredicate = criteriaBuilder.or(searchPredicatesArray);
	    criteriaQuery.where(searchPredicate);
	    criteriaQuery.orderBy(criteriaBuilder.asc(productsRoot.get("price"))); 
	    
	    int totalProducts = entityManager.createQuery(criteriaQuery).getResultList().size();
	    int startProductPosition = page * 6;
	    productPage.setTotalElements(totalProducts);
	    productPage.setTotalPages(getProductPages(totalProducts));
	    
	    List<Product> wantedProducts = entityManager.createQuery(criteriaQuery).setFirstResult(startProductPosition).setMaxResults(6).getResultList();
	    productPage.setContent(wantedProducts);
	    productPage.setNumber(page);
	    productPage.setNumberOfElements(wantedProducts.size());
		return productPage;
	}
	
	private int getProductPages(int numberOfProducts){
		return (int) Math.ceil(numberOfProducts / 6.0);
	}

	@Override
	public int findSearchProductsNumberByRange(String[] searchTerms, double min, double max, List<Brand> brands) {
		CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
	    CriteriaQuery<Product> criteriaQuery = criteriaBuilder.createQuery(Product.class);
	    
	    Root<Product> productsRoot = criteriaQuery.from(Product.class);
	    
	    Predicate priceRangePredicate = criteriaBuilder.between(productsRoot.get("price"), min, max);
        List<Predicate> searchPredicatesList = new ArrayList<>();
	    
	    if(searchTerms.length > 0){
	    	for(String term : searchTerms){
	    		searchPredicatesList.add(criteriaBuilder.like(productsRoot.get("name"), "%" + term +"%"));
	    	}
	    }
	    
	    Predicate[] searchPredicatesArray = new Predicate[searchPredicatesList.size()];
	    searchPredicatesList.toArray(searchPredicatesArray);
	    
	    Predicate searchPredicate = criteriaBuilder.or(searchPredicatesArray);
	    
	    if(!brands.isEmpty()){
	    	List<Predicate> brandPredicateList = new ArrayList<>();
	    	
	    	for(int i=0; i < brands.size(); i++){
	    		brandPredicateList.add(criteriaBuilder.equal(productsRoot.get("brand"), brands.get(i)));
		    }
	    	
	    	Predicate[] brandsPredicateArray = new Predicate[brandPredicateList.size()];
		    brandPredicateList.toArray(brandsPredicateArray);
		    
		    Predicate brandsPredicate = criteriaBuilder.or(brandsPredicateArray);
		    criteriaQuery.where(criteriaBuilder.and(searchPredicate, priceRangePredicate, brandsPredicate));
	    }else{
	    	criteriaQuery.where(criteriaBuilder.and(searchPredicate, priceRangePredicate));
	    }
	    
	    int number = 0;
	    number = entityManager.createQuery(criteriaQuery).getResultList().size();
	    
		return number;
	}

	@Override
	public List<Brand> findSearchBrands(String[] searchTerms) {
		CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
	    CriteriaQuery<Brand> criteriaQuery = criteriaBuilder.createQuery(Brand.class);
	    
        Root<Product> productsRoot = criteriaQuery.from(Product.class);
        List<Predicate> searchPredicatesList = new ArrayList<>();
	    
	    if(searchTerms.length > 0){
	    	for(String term : searchTerms){
	    		searchPredicatesList.add(criteriaBuilder.like(productsRoot.get("name"), "%" + term +"%"));
	    	}
	    }
	    
	    Predicate[] searchPredicatesArray = new Predicate[searchPredicatesList.size()];
	    searchPredicatesList.toArray(searchPredicatesArray);
	    
	    Predicate searchPredicate = criteriaBuilder.or(searchPredicatesArray);
	    
	    criteriaQuery.select(productsRoot.get("brand")).distinct(true);
	    criteriaQuery.where(criteriaBuilder.and(searchPredicate));
	    
	    List<Brand> brands = entityManager.createQuery(criteriaQuery).getResultList();
		return brands;
	}

	@Override
	public int findSearchProductsNumberByBrand(String[] searchTerms, Brand brand) {
		CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
	    CriteriaQuery<Product> criteriaQuery = criteriaBuilder.createQuery(Product.class);
	    
	    Root<Product> productsRoot = criteriaQuery.from(Product.class);
        List<Predicate> searchPredicatesList = new ArrayList<>();
	    
	    if(searchTerms.length > 0){
	    	for(String term : searchTerms){
	    		searchPredicatesList.add(criteriaBuilder.like(productsRoot.get("name"), "%" + term +"%"));
	    	}
	    }
	    
	    Predicate[] searchPredicatesArray = new Predicate[searchPredicatesList.size()];
	    searchPredicatesList.toArray(searchPredicatesArray);
	    
	    Predicate searchPredicate = criteriaBuilder.or(searchPredicatesArray);
	    Predicate brandPredicate = criteriaBuilder.equal(productsRoot.get("brand"), brand);
	    
	    criteriaQuery.where(criteriaBuilder.and(searchPredicate, brandPredicate));
	    int number = 0;
	    number = entityManager.createQuery(criteriaQuery).getResultList().size();
	    
		return number;
	}

}
