package springeshop.service;

import java.util.List;
import springeshop.model.Order;

public interface OrderService {

	void saveOrder(Order order);
	List<Order> findUserOrders(int userid);
	
}
