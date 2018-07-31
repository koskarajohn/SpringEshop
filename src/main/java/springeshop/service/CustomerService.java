package springeshop.service;

import java.util.List;

import springeshop.model.Customer;

public interface CustomerService {

	Customer findById(int id);
	Customer findByLastNameAndFirstName(String lastName, String firstName);
	void saveCustomer(Customer customer);
	void updateCustomer(Customer customer);
	void deleteCustomerById(int id);
	void deleteAllCustomers();
	List<Customer> findAllCustomers();
	boolean doesCustomerExist(Customer customer);
}
