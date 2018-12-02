package springeshop.model;

import javax.validation.Valid;
import javax.validation.constraints.Email;

public class OrderDetails {

	@Email
	private String email;
	
	@Valid
	private ShippingInfo shipping_info;
	
	@Valid
	private BillingInfo billing_info;
	
	private boolean isBillingAddressSameWithShippingAddress;
	
	public OrderDetails(){
		
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public ShippingInfo getShipping_info() {
		return shipping_info;
	}

	public void setShipping_info(ShippingInfo shipping_info) {
		this.shipping_info = shipping_info;
	}

	public BillingInfo getBilling_info() {
		return billing_info;
	}

	public void setBilling_info(BillingInfo billing_info) {
		this.billing_info = billing_info;
	}

	public boolean isBillingAddressSameWithShippingAddress() {
		return isBillingAddressSameWithShippingAddress;
	}

	public void setBillingAddressSameWithShippingAddress(boolean isBillingAddressSameWithShippingAddress) {
		this.isBillingAddressSameWithShippingAddress = isBillingAddressSameWithShippingAddress;
	}
	
		
}
