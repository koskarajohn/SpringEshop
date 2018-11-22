package springeshop.service;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import springeshop.model.Cart;
import springeshop.model.Product;
import springeshop.repositories.CartRepository;

@Service("cartService")
@Transactional
public class CartServiceImpl implements CartService{

	@Autowired
	private CartRepository cartRepository;
	
	@Override
	public List<Cart> findUserCartProducts(int userid) {
		return cartRepository.findUserCartProducts(userid);
	}
	
	@Override
	public void deleteUserCart(int userid) {
		cartRepository.deleteUserCart(userid);
	}

	@Override
	public Cart findUserCartRow(int userid, int productid) {
		return cartRepository.findUserCartProductRow(userid, productid);
	}

	@Override
	public void deleteUserCartRow(int userid, int productid) {
		cartRepository.deleteUserCartProductRow(userid, productid);
	}

	@Override
	public void addProductToCart(Cart cartProduct) {
		cartRepository.save(cartProduct);
	}
	
	@Override
	public void updateCartProduct(int userid, int productid, int quantity) {
		cartRepository.updateCartProduct(userid, productid, quantity);
	}

	@Override
	public void deleteProductFromCart(int userid, int productid) {
		cartRepository.deleteProductFromCart(userid, productid);
	}

	@Override
	public boolean doesUserCartRowExist(int userid, int productid) {
		return findUserCartRow(userid, productid) != null;
	}
	
}
