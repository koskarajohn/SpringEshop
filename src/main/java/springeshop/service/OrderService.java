package springeshop.service;

import java.util.List;
import springeshop.model.Order;

public interface OrderService {

	boolean saveOrderAndIsSuccess(Order order);
	List<Order> findUserOrders(int userid);
	
}
