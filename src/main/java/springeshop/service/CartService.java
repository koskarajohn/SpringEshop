package springeshop.service;

import java.util.List;
import springeshop.model.Cart;

public interface CartService {

	List<Cart> findUserCartProducts(int userid);
	boolean deleteUserCartAndIsSuccess(int userid);
	Cart findUserCartRow(int userid, int productid);
	boolean deleteUserCartRowAndIsSuccess(int userid, int productid);
	void addProductToCart(Cart cartProduct);
	boolean updateCartProductAndIsSuccess(int userid, int productid, int quantity);;
	boolean doesUserCartRowExist(int userid, int productid);
}
