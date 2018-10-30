package springeshop.service;

import java.util.List;

import springeshop.model.Brand;


public interface BrandService {

	Brand findByName(String name);
	void saveBrand(Brand brand);
	List<Brand> findAllBrands();
	boolean doesBrandExist(Brand brand);
}
