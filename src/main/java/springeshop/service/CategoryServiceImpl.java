package springeshop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import springeshop.model.Category;
import springeshop.repositories.CategoryRepository;

@Service("categoryService")
@Transactional
public class CategoryServiceImpl implements CategoryService{

	@Autowired
	private CategoryRepository categoryRepository;

	@Override
	public Category findById(int id) {
		return categoryRepository.findById(id);
	}

	@Override
	public Category findByName(String name) {
		return categoryRepository.findByName(name);
	}

	@Override
	public void saveCategory(Category category) {
		categoryRepository.save(category);
	}

	@Override
	public void updateCategory(Category category) {
		saveCategory(category);
	}

	@Override
	public void deleteCategoryById(int id) {
		categoryRepository.deleteById(id);
	}


	@Override
	public boolean doesCategoryExist(Category category) {
		return findByName(category.getName()) != null;
	}

}
