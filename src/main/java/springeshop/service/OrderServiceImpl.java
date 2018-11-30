package springeshop.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import springeshop.model.Order;
import springeshop.repositories.OrderRepository;

@Service("orderService")
@Transactional
public class OrderServiceImpl implements OrderService{
	
	@Autowired
	private OrderRepository orderRepository;

	@Override
	public boolean saveOrderAndIsSuccess(Order order) {
        boolean isSuccess = false;
		
		try {
			orderRepository.save(order);
			isSuccess = true;
		} catch (DataAccessException exception) {
			System.out.println(exception);
			isSuccess = false;
		}
		
		return isSuccess;
	}

	@Override
	public List<Order> findUserOrders(int userid) {
		return orderRepository.findUserOrders(userid);
	}

}
