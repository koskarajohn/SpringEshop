package springeshop.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import springeshop.model.Inventory;
import springeshop.repositories.InventoryRepository;

@Service("inventoryService")
@Transactional
public class InventoryServiceImpl implements InventoryService{

	@Autowired
	private InventoryRepository inventoryRepository;
	
	@Override
	public int findProductQuantity(int productid) {
		return inventoryRepository.findProductQuantity(productid);
	}

	@Override
	public void saveProductQuantity(Inventory productInventory) {
		inventoryRepository.save(productInventory);
	}

}
