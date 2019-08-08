package springeshop.service;

import java.util.List;

import springeshop.model.CartProduct;
import springeshop.model.Order;
import springeshop.model.User;

public interface EmailService {
	void sendEmail(Order order, List<CartProduct> cartProducts);
	void sendResetPasswordEmail(User user, String link);
}
