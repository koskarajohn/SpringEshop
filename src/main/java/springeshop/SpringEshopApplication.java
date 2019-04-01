package springeshop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.scheduling.annotation.EnableAsync;

@EnableAsync
@SpringBootApplication(scanBasePackages={"springeshop"})
@EnableCaching
public class SpringEshopApplication {
	
	
	public static void main(String[] args) {
		SpringApplication.run(SpringEshopApplication.class, args);
	}
	
}
