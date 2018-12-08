package springeshop.service;

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
import springeshop.repositories.BrandRepository;

@Service("brandService")
@Transactional
public class BrandServiceImpl implements BrandService{

	@Autowired
	private BrandRepository brandRepository;
	
	@Autowired
	private EntityManager entityManager;

	@Override
	public Brand findByName(String name) {
		return brandRepository.findByName(name);
	}

	@Override
	public void saveBrand(Brand brand) {
		brandRepository.save(brand);
	}

	@Override
	public List<Brand> findAllBrands() {
		return brandRepository.findAll();
	}

	@Override
	public boolean doesBrandExist(Brand brand) {
		return findByName(brand.getName()) != null;
	}

	@Override
	public boolean doesBrandExist(String brandName) {
		return findByName(brandName) != null;
	}

	@Override
	public List<Brand> findSpecificBrands(String[] brands) {
		CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
	    CriteriaQuery<Brand> criteriaQuery = criteriaBuilder.createQuery(Brand.class);
	 
	    Root<Brand> requestedBrands = criteriaQuery.from(Brand.class);
	    Predicate[] predicates = new Predicate[brands.length];
	    for(int i=0; i < predicates.length; i++){
	    	predicates[i] = criteriaBuilder.equal(requestedBrands.get("name"), brands[i]);
	    }
	    
	    criteriaQuery.where(criteriaBuilder.or(predicates));
	 
	    return entityManager.createQuery(criteriaQuery).getResultList();
	}
}
