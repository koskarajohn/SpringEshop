package springeshop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import springeshop.model.Brand;
import springeshop.repositories.BrandRepository;

@Service("brandService")
@Transactional
public class BrandServiceImpl implements BrandService{

	@Autowired
	private BrandRepository brandRepository;

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
}
