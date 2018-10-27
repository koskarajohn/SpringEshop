package springeshop.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.concurrent.CompletableFuture;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.regions.Region;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.PutObjectRequest;

@Component
public class AmazonS3ClientServiceImpl implements AmazonS3ClientService{

	private String awsS3AudioBucket;
    private AmazonS3 amazonS3;
    private static final Logger logger = LoggerFactory.getLogger(AmazonS3ClientServiceImpl.class);
    
    @Autowired
    public AmazonS3ClientServiceImpl(Region awsRegion, AWSCredentialsProvider awsCredentialsProvider, String awsS3AudioBucket){
    	this.amazonS3 = AmazonS3ClientBuilder.standard()
    			                             .withCredentials(awsCredentialsProvider)
    			                             .withRegion(awsRegion.getName()).build();
    	this.awsS3AudioBucket = awsS3AudioBucket;
    }

	@Async
	public CompletableFuture<Boolean> uploadImage(MultipartFile image) {
		
		boolean isImageUploadSuccess = true;

		try{
			File imageFile = convertImageToFile(image);
			uploadImageToS3Bucket(image.getOriginalFilename(), imageFile);
			imageFile.delete();
		}catch (IOException | AmazonServiceException ex) {
			logger.error("error [" + ex.getMessage() + "] occurred while uploading [" + image.getOriginalFilename() + "] ");
			isImageUploadSuccess = false;
		}
		
		return CompletableFuture.completedFuture(isImageUploadSuccess);
	}
	
	private File convertImageToFile(MultipartFile image) throws IOException{
		File convertedFile = new File(image.getOriginalFilename());
		FileOutputStream fileOutputStream = new FileOutputStream(convertedFile);
		fileOutputStream.write(image.getBytes());
		fileOutputStream.close();
		return convertedFile;
	}
	
	private void uploadImageToS3Bucket(String imageName, File imageFile){
		amazonS3.putObject(new PutObjectRequest(awsS3AudioBucket, "products/" +imageName, imageFile)
				.withCannedAcl(CannedAccessControlList.PublicRead));
	}
}
