package springeshop;

import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import springeshop.model.Category;
import springeshop.service.CategoryService;
import springeshop.util.ErrorMessage;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class CategoryControllerTests {
	
	@Autowired
	private CategoryService categoryService;
	
	private final ObjectMapper mapper = new ObjectMapper();
	
	@Autowired
    private MockMvc mockMvc;
	
	private String asJson(Object object) throws JsonProcessingException{
		return mapper.writeValueAsString(object);
	}

	@Test
	public void readSingleCategory() throws Exception {
		
		mockMvc.perform(get("/api/categories/1"))
	       .andExpect(status().isOk())
	       .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
	       .andExpect(jsonPath("$.id", is(1)))
           .andExpect(jsonPath("$.name", is("Vitamins")));	       
	}
	
	@Test
	public void readCategories() throws Exception{
		
		mockMvc.perform(get("/api/categories"))
		       .andExpect(status().isOk())
		       .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
		       //.andExpect(jsonPath("$", hasSize(4)))
		       .andExpect(jsonPath("$[3].id", is(4)))
	           .andExpect(jsonPath("$[3].name", is("Shampoos")));	;
	}
	
	@Test
	public void categoryNotFound() throws Exception{
				
		mockMvc.perform(get("/api/categories/15"))
		       .andExpect(status().isNotFound())
		       .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
		       .andExpect(jsonPath("$.errorMessage", is("Category with id 15 not found")));
	}
	
	@Test
	public void categoryAlreadyExists() throws Exception{
		
		mockMvc.perform(post("/api/categories")
			   .contentType(MediaType.APPLICATION_JSON_UTF8)
			   .content(asJson(new Category("Vitamins"))))
		       .andExpect(status().isConflict())
		       .andExpect(jsonPath("$.errorMessage",is("Unable to create. A Category with name Vitamins already exists.")));
	}
	
	@Test
	public void createCategory() throws Exception{
		
		//mockMvc.perform(post("/api/categories")
		//		.contentType(MediaType.APPLICATION_JSON_UTF8)
		//		.content(asJson(new Category("Fragrances"))))
		//        .andExpect(status().isCreated())
		//        .andExpect(header().string("Location", "http://localhost/api/categories/9"));
		
		//mockMvc.perform(get("/api/categories/9"))
	    //   .andExpect(status().isOk())
	    //   .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
	    //   .andExpect(jsonPath("$.id", is(9)))
        //   .andExpect(jsonPath("$.name", is("Fragrances")));
	}
	
	@Test
	public void updateCategory() throws Exception{
		
		mockMvc.perform(put("/api/categories/9")
				.contentType(MediaType.APPLICATION_JSON_UTF8)
				.content(asJson(new Category("Fragrances"))))
		        .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
		        .andExpect(status().isOk())
		        .andExpect(jsonPath("$.id", is(9)))
		        .andExpect(jsonPath("$.name", is("Fragrances")));

	}
	
	//@Test
	//public void deleteCategory() throws Exception{
	//	
	//	mockMvc.perform(delete("/api/categories/8"))
	//	       .andExpect(status().isNoContent());
	//}
	
	@Test
	public void deleteCategoryThatDoesntExist() throws Exception{
				
		mockMvc.perform(delete("/api/categories/8"))
		       .andExpect(status().isNotFound())
		       .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
		       .andExpect(jsonPath("$.errorMessage", is("Unable to delete. Category with id 8 not found.")));
	}
	
	
	
	
	
	
	
	
	
	
	

}
