package springeshop.service;

import java.util.List;

import springeshop.model.Brand;


public interface BrandService {

	Brand findByName(String name);
	void saveBrand(Brand brand);
	List<Brand> findAllBrands();
	List<Brand> findSpecificBrands(String[] brands);
	boolean doesBrandExist(Brand brand);
	boolean doesBrandExist(String brand);
}
