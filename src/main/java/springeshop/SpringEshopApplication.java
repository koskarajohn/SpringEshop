package springeshop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;
import org.springframework.scheduling.annotation.EnableAsync;

import springeshop.configuration.JpaConfiguration;

@EnableAsync
@Import(JpaConfiguration.class)
@SpringBootApplication(scanBasePackages={"springeshop"})
public class SpringEshopApplication {
	
	
	public static void main(String[] args) {
		SpringApplication.run(SpringEshopApplication.class, args);
	}
	
}
