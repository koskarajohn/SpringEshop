package springeshop.configuration;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;

@EnableWebSecurity
@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{

	@Autowired
	private  DataSource dataSource;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.anonymous().authorities("ROLE_GUEST").and()
		    .authorizeRequests()
		    .antMatchers(HttpMethod.GET, "/*", "/api/**", "/category/**", "/product/**", "/user/**").permitAll()
		    .antMatchers(HttpMethod.POST, "/api/**").permitAll()
		    .antMatchers(HttpMethod.GET, "/anonymous/session").permitAll()
		    .antMatchers(HttpMethod.POST, "/authentication/validateuser").permitAll()
		    .anyRequest().authenticated()
			.and()
			.httpBasic()
			.and().csrf().disable();
		    //.and().csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
		
		http.headers().cacheControl().disable();
		
	}
	
	@Autowired
	public void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.jdbcAuthentication().passwordEncoder(passwordEncoder()).dataSource(dataSource)
		    .usersByUsernameQuery("select username, password, is_active from users where username=?")
		    .authoritiesByUsernameQuery("select username, role from authorities where username=?");
	}
	
	@Bean(name = "passwordEncoder")
	public BCryptPasswordEncoder passwordEncoder() {
	    return new BCryptPasswordEncoder();
	}
	
	@Override
	public void configure(WebSecurity web) throws Exception {
	    web.ignoring().antMatchers("/static/**");
	}
}
