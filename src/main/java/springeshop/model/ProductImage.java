package springeshop.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "product_images")
public class ProductImage implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -5255790098300665856L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "product_id")
	private Product product;
	
	@Column(name = "small_image_url")
	@NotNull(message = "Please provide the small image url")
	private String smallImageurl;
	
	@Column(name = "large_image_url")
	@NotNull(message = "Please provide the large image url")
	private String largeImageurl;
	
	@Column(name = "very_small_image_url")
	@NotNull(message = "Please provide the very small image url")
	private String verySmallImageurl;
	
	public ProductImage(){
		
	}
	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}


	public String getSmallImageurl() {
		return smallImageurl;
	}


	public void setSmallImageurl(String smallImageurl) {
		this.smallImageurl = smallImageurl;
	}


	public String getLargeImageurl() {
		return largeImageurl;
	}

	public void setLargeImageurl(String largeImageurl) {
		this.largeImageurl = largeImageurl;
	}
	
	public String getVerySmallImageurl() {
		return verySmallImageurl;
	}


	public void setVerySmallImageurl(String verySmallImageurl) {
		this.verySmallImageurl = verySmallImageurl;
	}
	
}
