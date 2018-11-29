package springeshop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import springeshop.model.BillingInfo;

public interface BillingInfoRepository extends JpaRepository<BillingInfo, Integer>{

}
