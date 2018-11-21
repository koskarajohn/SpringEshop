package springeshop.service;

import java.sql.Timestamp;
import java.util.List;

import springeshop.model.Cart;
import springeshop.model.Product;

public interface CartService {

	List<Product> findUserCart(int userid);
	void deleteUserCart(int userid);
	int findProductQuantity(int userid, int productid);
	void addProductToCart(Cart cartProduct);
	void deleteProductFromCart(int userid, int productid);
}
