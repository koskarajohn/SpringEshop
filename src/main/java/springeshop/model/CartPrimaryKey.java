package springeshop.model;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class CartPrimaryKey implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 7753873971616717634L;

    private int userId;
 
    private int productId;
    
    public CartPrimaryKey() {}

	public CartPrimaryKey(int userId, int productId) {
		this.userId = userId;
		this.productId = productId;
	}
    
	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
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
        if (!(o instanceof CartPrimaryKey)) return false;
        CartPrimaryKey that = (CartPrimaryKey) o;
        return Objects.equals(getUserId(), that.getUserId()) &&
                Objects.equals(getProductId(), that.getProductId());
    }

	@Override
    public int hashCode() {
        return Objects.hash(getUserId(), getProductId());
    }
}
