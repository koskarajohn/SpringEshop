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
	public List<Product> findUserCart(int userid) {
		return cartRepository.findUserCart(userid);
	}
	
	@Override
	public void deleteUserCart(int userid) {
		cartRepository.deleteUserCart(userid);
	}

	@Override
	public int findProductQuantity(int userid, int productid) {
		return cartRepository.findProductQuantity(userid, productid);
	}

	@Override
	public void addProductToCart(Cart cartProduct) {
		cartRepository.save(cartProduct);
	}

	@Override
	public void deleteProductFromCart(int userid, int productid) {
		cartRepository.deleteProductFromCart(userid, productid);
	}
}
