package springeshop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import springeshop.model.Product;
import springeshop.service.CategoryService;
import springeshop.service.ProductService;

@Controller
public class TestController {

	@Autowired
	private ProductService productService;
	
	@Autowired
	private CategoryService categoryService;
	
	@RequestMapping("/")
	@ResponseBody
	public String home() {
		List<Product> products = productService.findByCategoryId(1);
		for(Product product : products){
			System.out.println(product.getName());
		}
		return "Hello World!";
	}
}
