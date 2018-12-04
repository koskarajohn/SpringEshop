package springeshop.service;

import java.util.List;

import springeshop.model.OrderProduct;
import springeshop.model.Product;

public interface OrderProductService {

	void saveOrderProduct(OrderProduct orderProduct);
	boolean saveOrderProducts(List<OrderProduct> orderProducts);
	List<Product> findOrderProducts(int orderid);
}
