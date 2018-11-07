package springeshop.service;

import springeshop.model.Inventory;

public interface InventoryService {

	int findProductQuantity(int productid);
	void saveProductQuantity(Inventory productInventory);
}
