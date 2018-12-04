package springeshop.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "orders")
public class Order {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User user;
	
	@Column(name = "email")
	@Email
	@NotNull(message = "Please provide email")
	private String email;
	
	@Column(name = "status")
	@NotNull(message = "Please provide status")
	private String status;
	
	@NotNull
	@Column(name ="order_date")
	private Timestamp order_date;
	
	@Column(name ="payment_date")
	private Timestamp payment_date;
	
	@Column(name ="shipping_date")
	private Timestamp shipping_date;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "shipping_info_id")
	private ShippingInfo shippingInfo;
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "billing_info_id")
	private BillingInfo billingInfo;
	
	public Order(){
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Timestamp getOrder_date() {
		return order_date;
	}

	public void setOrder_date(Timestamp order_date) {
		this.order_date = order_date;
	}

	public Timestamp getPayment_date() {
		return payment_date;
	}

	public void setPayment_date(Timestamp payment_date) {
		this.payment_date = payment_date;
	}

	public Timestamp getShipping_date() {
		return shipping_date;
	}

	public void setShipping_date(Timestamp shipping_date) {
		this.shipping_date = shipping_date;
	}

	public ShippingInfo getShippingInfo() {
		return shippingInfo;
	}

	public void setShippingInfo(ShippingInfo shippingInfo) {
		this.shippingInfo = shippingInfo;
	}

	public BillingInfo getBillingInfo() {
		return billingInfo;
	}

	public void setBillingInfo(BillingInfo billingInfo) {
		this.billingInfo = billingInfo;
	}
	
	
}
