package springeshop.service;

import java.util.List;
import springeshop.model.Cart;
import springeshop.model.Product;

public interface CartService {

	List<Cart> findUserCartProducts(int userid);
	void deleteUserCart(int userid);
	Cart findUserCartRow(int userid, int productid);
	void deleteUserCartRow(int userid, int productid);
	Product findUserCartProduct(int userid,  int productid);
	int findProductQuantity(int userid, int productid);
	void addProductToCart(Cart cartProduct);
	void deleteProductFromCart(int userid, int productid);
	boolean doesUserCartRowExist(int userid, int productid);
}
