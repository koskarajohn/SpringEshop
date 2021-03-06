package springeshop.service;

import java.util.List;

import springeshop.model.Brand;
import springeshop.model.ProductPage;

public interface SearchService {

	ProductPage findBySearchTerms(String[] searchTerms, int page, List<Brand> brands , List<double[]> priceRanges, String order);
	int findSearchProductsNumberByRange(String[] searchTerms, double min, double max, List<Brand> brands);
	int findSearchProductsNumberByBrand(String[] searchTerms, Brand brand, List<double[]> priceRanges);
	List<Brand> findSearchBrands(String[] searchTerms);
}
