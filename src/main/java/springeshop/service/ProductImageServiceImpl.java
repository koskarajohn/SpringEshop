package springeshop.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springeshop.model.ProductImage;
import springeshop.repositories.ProductImageRepository;

@Service("imageService")
@Transactional
public class ProductImageServiceImpl implements ProductImageService{

	@Autowired
	private ProductImageRepository imageRepository;

	@Override
	public void saveImage(ProductImage image) {
		imageRepository.save(image);
	}

	@Override
	public ProductImage findByProductId(int id) {
		return imageRepository.findByProductId(id);
	}
}
