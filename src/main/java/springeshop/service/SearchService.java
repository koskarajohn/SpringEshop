package springeshop.service;

import java.util.List;

import springeshop.model.Brand;
import springeshop.model.ProductPage;

public interface SearchService {

	ProductPage findBySearchTerms(String[] searchTerms, int page);
	int findSearchProductsNumberByRange(String[] searchTerms, double min, double max, List<Brand> brands);
	List<Brand> findSearchBrands(String[] searchTerms);
}
