package springeshop.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "shipping_info")
public class ShippingInfo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@Column(name = "first_name")
	@NotNull(message = "Please provide first name")
	@Size(min = 2, max = 200, message = "First name must be between 2 and 200 characters")
	private String first_name;
	
	@Column(name = "last_name")
	@NotNull(message = "Please provide last name")
	@Size(min = 2, max = 200, message = "Last name must be between 2 and 200 characters")
	private String last_name;
	
	@Column(name = "street")
	@NotNull(message = "Please provide street name")
	@Size(min = 2, max = 200, message = "Stret name must be between 2 and 200 characters")
	private String street;
	
	@Column(name = "post_code")
	@NotNull(message = "Please provide post code")
	private String post_code;
	
	@Column(name = "city")
	@NotNull(message = "Please provide city")
	@Size(min = 2, max = 200, message = "City must be between 2 and 200 characters")
	private String city;
	
	@Column(name = "phone")
	@NotNull(message = "Please provide phone")
	private String phone;
	
	public ShippingInfo(){
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getPost_code() {
		return post_code;
	}

	public void setPost_code(String post_code) {
		this.post_code = post_code;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	
	
}
