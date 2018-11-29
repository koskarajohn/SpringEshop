package springeshop.model;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Embeddable;

@Embeddable
public class OrderProductPrimaryKey implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -6875448711966534991L;

	private int orderId;
	 
    private int productId;
    
    public OrderProductPrimaryKey() {}

	public OrderProductPrimaryKey(int orderId, int productId) {
		this.orderId = orderId;
		this.productId = productId;
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}
	
	@Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof OrderProductPrimaryKey)) return false;
        OrderProductPrimaryKey that = (OrderProductPrimaryKey) o;
        return Objects.equals(getOrderId(), that.getOrderId()) &&
                Objects.equals(getProductId(), that.getProductId());
    }

	@Override
    public int hashCode() {
        return Objects.hash(getOrderId(), getProductId());
    }
}
