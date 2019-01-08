package springeshop.service;

import springeshop.model.ProductPage;

public interface SearchService {

	ProductPage findBySearchTerms(String[] searchTerms, int page);
}
