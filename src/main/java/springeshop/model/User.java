package springeshop.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@Column(name = "username")
	@NotNull(message = "Please provide username")
	private String username;
	
	@Column(name = "email")
	@Email
	@NotNull(message = "Please provide email")
	private String email;
	
	@Column(name = "password")
	@NotNull(message = "Please provide password")
	private String password;
	
	@Column(name = "first_name")
	@NotNull(message = "Please provide first name")
	@Size(min = 2, max = 200, message = "first name must be between 2 and 200 characters")
	private String first_name;
	
	@Column(name = "last_name")
	@NotNull(message = "Please provide last name")
	@Size(min = 2, max = 200, message = "Last name must be between 2 and 200 characters")
	private String last_name;
	
	@Column(name = "phone")
	@NotNull
	private String phone;
	
	@Column(name = "is_active")
	@NotNull
	private boolean is_active;
	
	public User(){
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public boolean getIs_active() {
		return is_active;
	}

	public void setIs_active(boolean is_active) {
		this.is_active = is_active;
	}
	
	
}
