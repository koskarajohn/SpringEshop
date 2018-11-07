package springeshop.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RoutesController {

	@RequestMapping({ "/login", "/register", "/cart", "/product", "/checkout" })
	public String index() {
	     return "forward:/index.html";
	}

	
}
