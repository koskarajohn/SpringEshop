package springeshop.service;

import springeshop.model.ProductImage;

public interface ProductImageService {

	ProductImage findByProductId(int id);
	void saveImage(ProductImage image);
}
