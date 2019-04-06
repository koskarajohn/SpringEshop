package springeshop.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RoutesController {

	@RequestMapping({ "/login", "/register", "/cart/**", "/product/**", "/category/**", "/checkout", "/search/**" })
	public String forwardToIndex() {
	     return "forward:/index.html";
	}

	
}
