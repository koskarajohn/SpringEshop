package springeshop.model;

import java.util.List;

public class ProductPage {
	
	private List<Product> content;
	private int totalElements;
	private int totalPages;
	private int number;
	private int numberOfElements;
	
	public ProductPage(){
		
	}

	public List<Product> getContent() {
		return content;
	}

	public void setContent(List<Product> content) {
		this.content = content;
	}

	public int getTotalElements() {
		return totalElements;
	}

	public void setTotalElements(int totalElements) {
		this.totalElements = totalElements;
	}

	public int getTotalPages() {
		return totalPages;
	}

	public void setTotalPages(int totalPages) {
		this.totalPages = totalPages;
	}

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	public int getNumberOfElements() {
		return numberOfElements;
	}

	public void setNumberOfElements(int numberOfElements) {
		this.numberOfElements = numberOfElements;
	}
}
