package springeshop.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springeshop.model.OrderProduct;
import springeshop.model.Product;

public interface OrderProductRepository extends JpaRepository<OrderProduct, Integer>{

	@Query("select prod from OrderProduct prod where prod.order.id = :orderid")
	List<Product> findOrderProducts(@Param("orderid") int orderid);
}
