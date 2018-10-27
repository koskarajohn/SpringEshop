package springeshop.service;

import java.util.concurrent.CompletableFuture;

import org.springframework.web.multipart.MultipartFile;

public interface AmazonS3ClientService {
	CompletableFuture<Boolean> uploadImage(MultipartFile image);
}
