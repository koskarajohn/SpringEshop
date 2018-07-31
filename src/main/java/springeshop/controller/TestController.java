package springeshop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import springeshop.service.CategoryService;

@Controller
public class TestController {

	@Autowired
	private CategoryService categoryService;
	
	@RequestMapping("/")
	@ResponseBody
	public String home() {
		System.out.println(categoryService.findById(1).getName());
		return "Hello World!";
	}
}
