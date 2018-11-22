package springeshop.configuration;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.omg.CosNaming.NamingContextExtPackage.StringNameHelper;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
public class RequestFilter extends OncePerRequestFilter{

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		
		if(request.getCookies() != null){
			
			Cookie isAuthenticatedCookie = findIsAuthenticatedCookie(request.getCookies());
			
			if(isAuthenticatedCookie != null){
				String isAuthenticated = request.getUserPrincipal() != null ? "yes" : "no";
				if(!isAuthenticatedCookie.getValue().equals(isAuthenticated))
				      updateCookieIsAuthenticated(isAuthenticatedCookie, request, response);
				
			}else{
				createCookieIsAuthenticated(request, response);
			}
			
		}else{
			createCookieIsAuthenticated(request, response);
		}
			
		filterChain.doFilter(request, response);
	}
	
	private void createCookieIsAuthenticated(HttpServletRequest request, HttpServletResponse response){
		String isAuthenticated = request.getUserPrincipal() != null ? "yes" : "no";
		Cookie cookie = new  Cookie("IS_AUTHENTICATED", isAuthenticated);
		cookie.setMaxAge(3600000);
		cookie.setPath("/");
		cookie.setDomain("localhost");
		response.addCookie(cookie);
	}
	
	private void updateCookieIsAuthenticated(Cookie cookie, HttpServletRequest request, HttpServletResponse response){
			cookie.setValue(null);
			cookie.setMaxAge(0);
			cookie.setPath("");
			cookie.setDomain("localhost");
			response.addCookie(cookie);
			createCookieIsAuthenticated(request, response);
	}
	
	
	private Cookie findIsAuthenticatedCookie(Cookie[] cookies){
		return Arrays.asList(cookies).stream().filter(c -> c.getName().equals("IS_AUTHENTICATED")).findFirst().orElse(null);
	}

}