package springeshop.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "products")
public class Product implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 8422902060508142818L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@ManyToOne(optional = false)
	@JoinColumn(name = "brand_id")
	@NotNull
	private Brand brand;
	
	@ManyToOne(optional = false)
	@JoinColumn(name = "category_id")
	@NotNull
	private Category category;
	
	@Column(name = "name")
	@NotNull(message = "Please provide product name")
	@Size(min = 3, max = 200, message = "Name must be between 10 and 200 characters")
	private String name;

	@Column(name = "price", nullable = false)
	@NotNull(message = "Please provide product price")
	@Min(value = 0, message = "Price must be greater than zero")
	private double price;

	@Transient
	@NotNull(message = "Please provide product quantity")
	@Min(value = 0, message = "Quantity must be greater than zero")
	private int quantity;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "is_favorite")
	@NotNull
	private boolean is_favorite;
	
	@Column(name = "is_new")
	@NotNull
	private boolean is_new;

	@Transient
	private String smallImageUrl;
	
	@Transient
	private String largeImageUrl;
	
	@Transient
	private String verySmallImageUrl;

	public Product(){
		
	}
	
    public Product(String name, double price, String description){
		this.name = name;
		this.price = price;
		this.description = description;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public Brand getBrand() {
		return brand;
	}

	public void setBrand(Brand brand) {
		this.brand = brand;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}
	
	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getSmallImageUrl() {
		return smallImageUrl;
	}

	public void setSmallImageUrl(String smallImageUrl) {
		this.smallImageUrl = smallImageUrl;
	}

	public String getLargeImageUrl() {
		return largeImageUrl;
	}

	public void setLargeImageUrl(String largeImageUrl) {
		this.largeImageUrl = largeImageUrl;
	}

	public boolean getIs_favorite() {
		return is_favorite;
	}

	public void setIs_favorite(boolean is_favorite) {
		this.is_favorite = is_favorite;
	}

	public boolean getIs_new() {
		return is_new;
	}

	public void setIs_new(boolean is_new) {
		this.is_new = is_new;
	}

	public String getVerySmallImageUrl() {
		return verySmallImageUrl;
	}

	public void setVerySmallImageUrl(String verySmallImageUrl) {
		this.verySmallImageUrl = verySmallImageUrl;
	}
	
	
}
