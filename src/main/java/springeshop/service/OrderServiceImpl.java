package springeshop.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springeshop.model.Order;
import springeshop.repositories.OrderRepository;

@Service("orderService")
@Transactional
public class OrderServiceImpl implements OrderService{
	
	@Autowired
	private OrderRepository orderRepository;

	@Override
	public void saveOrder(Order order) {
		orderRepository.save(order);
	}

	@Override
	public List<Order> findUserOrders(int userid) {
		return orderRepository.findUserOrders(userid);
	}

}
