package springeshop.model;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "cart")
public class Cart {

	
	@EmbeddedId
    private CartProduct id;
	
	@OneToOne(fetch = FetchType.LAZY)
	@MapsId("userId")
	private User user;
	
	@OneToOne(fetch = FetchType.LAZY)
	@MapsId("productId")
	private Product product;
	
	@NotNull(message = "Please provide quantity")
	private int quantity;
	
	@NotNull
	@Column(name ="expiration")
	private Timestamp expiration;
	
	public Cart(){
		
	}

	public CartProduct getId() {
		return id;
	}

	public void setId(CartProduct id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Timestamp getExpiration() {
		return expiration;
	}

	public void setExpiration(Timestamp expiration) {
		this.expiration = expiration;
	}
	
	
}
