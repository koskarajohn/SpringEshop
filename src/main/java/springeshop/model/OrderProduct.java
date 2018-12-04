package springeshop.model;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "order_products")
public class OrderProduct {

	@EmbeddedId
    private OrderProductPrimaryKey id;
	
	@OneToOne(fetch = FetchType.LAZY)
	@MapsId("orderId")
	private Order order;
	
	@OneToOne(fetch = FetchType.LAZY)
	@MapsId("productId")
	private Product product;
	
	@NotNull(message = "Please provide quantity")
	@Column(name = "quantity")
	private int quantity;
	
	public OrderProduct(){
		
	}

	public OrderProductPrimaryKey getId() {
		return id;
	}

	public void setId(OrderProductPrimaryKey id) {
		this.id = id;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
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
	
	
}
