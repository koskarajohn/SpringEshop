package springeshop.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springeshop.model.Image;
import springeshop.repositories.ImageRepository;

@Service("imageService")
@Transactional
public class ImageServiceImpl implements ImageService{

	@Autowired
	private ImageRepository imageRepository;

	@Override
	public void saveImage(Image image) {
		imageRepository.save(image);
	}
}
