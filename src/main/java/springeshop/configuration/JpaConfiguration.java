package springeshop.configuration;

import java.util.Properties;

import javax.naming.NamingException;
import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableJpaRepositories(basePackages = "springeshop.repositories",
                       entityManagerFactoryRef = "entityManagerFactory",
                       transactionManagerRef = "transactionManager")
@EnableTransactionManagement
public class JpaConfiguration {

	@Autowired
	private Environment environment;
		
	@Bean(name = "dataSource")
	public DataSource dataSource(){
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setDriverClassName(environment.getProperty("spring.datasource.driver-class-name"));
		dataSource.setUrl(environment.getProperty("spring.datasource.url"));
		dataSource.setUsername(environment.getProperty("spring.datasource.username"));
	    dataSource.setPassword(environment.getProperty("spring.datasource.password"));	
		return dataSource;
	}
		
	@Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory() throws NamingException {
        LocalContainerEntityManagerFactoryBean factoryBean = new LocalContainerEntityManagerFactoryBean();
        factoryBean.setDataSource(dataSource());
        factoryBean.setPackagesToScan(new String[] { "springeshop.model" });
        factoryBean.setJpaVendorAdapter(jpaVendorAdapter());
        factoryBean.setJpaProperties(jpaProperties());
        return factoryBean;
    }
	
	@Bean
	public JpaVendorAdapter jpaVendorAdapter(){
		HibernateJpaVendorAdapter hibernateJpaVendorAdapter = new HibernateJpaVendorAdapter();
		return hibernateJpaVendorAdapter;
	}
	
	private Properties jpaProperties(){
		Properties properties = new Properties();	
	    properties.put("hibernate.hbm2ddl.method", environment.getRequiredProperty("spring.jpa.properties.hibernate.hbm2ddl.method"));
	    properties.put("hibernate.show_sql", environment.getRequiredProperty("spring.jpa.properties.hibernate.show_sql"));
	    properties.put("hibernate.format_sql", environment.getRequiredProperty("spring.jpa.properties.hibernate.format_sql"));
	    properties.put("hibernate.dialect", environment.getRequiredProperty("spring.jpa.properties.hibernate.dialect"));
	    properties.put("hibernate.jdbc.lob.non_contextual_creation", environment.getRequiredProperty("spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation"));
	    return properties;
	}
	
	@Bean
	@Autowired
	public PlatformTransactionManager transactionManager(EntityManagerFactory emf){
		JpaTransactionManager txManager = new JpaTransactionManager();
		txManager.setEntityManagerFactory(emf);
		return txManager;
	}
	
	
}
