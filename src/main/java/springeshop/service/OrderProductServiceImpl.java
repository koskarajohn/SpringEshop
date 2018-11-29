package springeshop.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springeshop.model.OrderProduct;
import springeshop.model.Product;
import springeshop.repositories.OrderProductRepository;

@Service("orderProductService")
@Transactional
public class OrderProductServiceImpl implements OrderProductService{
	
	@Autowired
	private OrderProductRepository orderProductRepository;

	@Override
	public void saveOrderProduct(OrderProduct orderProduct) {
		orderProductRepository.save(orderProduct);
	}

	@Override
	public List<Product> findOrderProducts(int orderid) {
		return orderProductRepository.findOrderProducts(orderid);
	}

}
