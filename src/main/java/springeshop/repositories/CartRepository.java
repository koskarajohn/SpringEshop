package springeshop.repositories;

import java.sql.Timestamp;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import springeshop.model.Cart;
import springeshop.model.Product;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer>{
	
	@Query("select cartProduct from Cart cartProduct where cartProduct.user.id = :userid")
	List<Cart> findUserCartProducts(@Param("userid") int userid);
	
	@Query(value = "delete from Cart cartProduct where cartProduct.user.id = :userid")
	@Modifying
	void deleteUserCart(@Param("userid") int userid);
	
	@Query("select cartProduct from Cart cartProduct where cartProduct.user.id = :userid and cartProduct.product.id = :productid")
	Cart findUserCartProductRow(@Param("userid") int userid, @Param("productid") int productid);
	
	@Query("select cartProduct.product from Cart cartProduct where cartProduct.user.id = :userid and cartProduct.product.id = :productid")
	Product findUserCartProduct(@Param("userid") int userid, @Param("productid") int productid);
	
	@Query(value = "delete from Cart cartProduct where cartProduct.user.id = :userid and cartProduct.product.id = :productid")
	@Modifying
	void deleteUserCartProductRow(@Param("userid") int userid, @Param("productid") int productid);
	
	@Query("select cartProduct.quantity from Cart cartProduct where cartProduct.user.id = :userid and cartProduct.product.id = :productid")
	int findProductQuantity(@Param("userid") int userid, @Param("productid") int productid);
	
	@Query(value = "insert into cart (user_id, product_id, quantity, expiration) values ( :userid, :productid, :quantity, :expiration )"
			, nativeQuery = true)
	void addProductToCart(@Param("userid") int userid, @Param("productid") int productid, @Param("quantity") int quantity, @Param("expiration") Timestamp expiration);
	
	@Query(value = "delete from Cart cartProduct where cartProduct.user.id = :userid and cartProduct.product.id = :productid")
	void deleteProductFromCart(@Param("userid") int userid, @Param("productid") int productid);
}
