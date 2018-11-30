package springeshop.service;

import java.util.List;
import springeshop.model.Cart;

public interface CartService {

	List<Cart> findUserCartProducts(int userid);
	boolean deleteUserCartAndIsSuccess(int userid);
	Cart findUserCartRow(int userid, int productid);
	void deleteUserCartRow(int userid, int productid);
	void addProductToCart(Cart cartProduct);
	boolean updateCartProductAndIsSuccess(int userid, int productid, int quantity);
	void deleteProductFromCart(int userid, int productid);
	boolean doesUserCartRowExist(int userid, int productid);
}
