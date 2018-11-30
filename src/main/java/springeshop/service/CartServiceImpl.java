package springeshop.service;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
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
	public boolean deleteUserCartAndIsSuccess(int userid) {
		boolean isSuccess = false;
		
		try {
			cartRepository.deleteUserCart(userid);
			isSuccess = true;
		} catch (DataAccessException exception) {
			System.out.println(exception);
			isSuccess = false;
		}
		
		return isSuccess;
	}

	@Override
	public Cart findUserCartRow(int userid, int productid) {
		return cartRepository.findUserCartProductRow(userid, productid);
	}

	@Override
	public boolean deleteUserCartRowAndIsSuccess(int userid, int productid) {
        boolean isSuccess = false;
		
		try {
			cartRepository.deleteUserCartProductRow(userid, productid);
			isSuccess = true;
		} catch (DataAccessException exception) {
			System.out.println(exception);
			isSuccess = false;
		}
		
		return isSuccess;
	}

	@Override
	public void addProductToCart(Cart cartProduct) {
		cartRepository.save(cartProduct);
	}
	
	@Override
	public boolean updateCartProductAndIsSuccess(int userid, int productid, int quantity) {
        boolean isSuccess = false;
		
		try {
			cartRepository.updateCartProduct(userid, productid, quantity);
			isSuccess = true;
		} catch (DataAccessException exception) {
			System.out.println(exception);
			isSuccess = false;
		}
		
		return isSuccess;
	}

	@Override
	public boolean doesUserCartRowExist(int userid, int productid) {
		return findUserCartRow(userid, productid) != null;
	}
	
}
