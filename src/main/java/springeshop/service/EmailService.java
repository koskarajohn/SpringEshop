package springeshop.service;

import java.util.List;

import springeshop.model.CartProduct;
import springeshop.model.Order;

public interface EmailService {
	void sendEmail(Order order, List<CartProduct> cartProducts);
}
