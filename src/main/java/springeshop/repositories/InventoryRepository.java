package springeshop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import springeshop.model.Inventory;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Integer>{

	@Query("select invent.quantity from Inventory invent where invent.product.id = :productid")
	int findProductQuantity(@Param("productid") int productid);
	
	@Query("select invent from Inventory invent where invent.product.id = :productid")
	Inventory findProductInventory(@Param("productid") int productid);
}
