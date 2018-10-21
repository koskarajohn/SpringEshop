package springeshop.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TestController {

	@RequestMapping({ "/login", "/register", "/category", "/cart", "/product", "/checkout" })
	   public String index() {
	       return "forward:/index.html";
	   }
	
}
