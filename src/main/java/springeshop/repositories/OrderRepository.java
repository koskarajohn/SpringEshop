package springeshop.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import springeshop.model.Order;

public interface OrderRepository extends JpaRepository<Order, Integer>{

	@Query("select order from Order order where order.user.id = :userid")
	List<Order> findUserOrders(@Param("userid") int userid);
}
