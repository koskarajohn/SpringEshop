package springeshop.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import springeshop.service.AmazonS3ClientService;


@RestController
@RequestMapping("/api")
public class ImageController {

	@Autowired
    private AmazonS3ClientService amazonS3ClientService;
	
	@PostMapping(value = "/images")
    public ResponseEntity<?> uploadFile(@RequestPart(value = "file") MultipartFile file) throws InterruptedException, ExecutionException
    {
        CompletableFuture<Boolean> imageUploadFuture = this.amazonS3ClientService.uploadImage(file);
        boolean isImageUploadSuccess = imageUploadFuture.get().booleanValue();

        if(isImageUploadSuccess){
        	return new ResponseEntity<>(HttpStatus.CREATED);
        }else {
        	return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
    }
}
