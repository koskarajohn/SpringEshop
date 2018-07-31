package springeshop.service;

import java.util.List;

import springeshop.model.Category;

public interface CategoryService {

	Category findById(int id);
	Category findByName(String name);
	void saveCategory(Category category);
	void updateCategory(Category category);
	void deleteCategoryById(int id);
	void deleatAllCategories();
	List<Category> findAllCategories();
	boolean doesCategoryExist(Category category);
}
