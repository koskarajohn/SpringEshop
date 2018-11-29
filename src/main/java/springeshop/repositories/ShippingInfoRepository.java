package springeshop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import springeshop.model.ShippingInfo;

public interface ShippingInfoRepository extends JpaRepository<ShippingInfo, Integer>{

}
