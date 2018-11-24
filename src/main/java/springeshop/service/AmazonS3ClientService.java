package springeshop.service;

import java.util.concurrent.CompletableFuture;

import org.springframework.web.multipart.MultipartFile;

import springeshop.util.ImageType;

public interface AmazonS3ClientService {
	CompletableFuture<Boolean> uploadImage(MultipartFile image, String category, ImageType imageType);
}
