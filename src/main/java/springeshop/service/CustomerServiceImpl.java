package springeshop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import springeshop.model.Customer;
import springeshop.repositories.CustomerRepository;

@Service("customerService")
@Transactional
public class CustomerServiceImpl implements CustomerService{
	
	@Autowired
	private CustomerRepository customerRepository;

	@Override
	public Customer findById(int id) {
		return customerRepository.findById(id);
	}

	@Override
	public Customer findByLastNameAndFirstName(String lastName, String firstName) {
		return customerRepository.findByLastNameAndFirstName(lastName, firstName);
	}

	@Override
	public void saveCustomer(Customer customer) {
		customerRepository.save(customer);
	}

	@Override
	public void updateCustomer(Customer customer) {
		saveCustomer(customer);
	}

	@Override
	public void deleteCustomerById(int id) {
		customerRepository.deleteById(id);
	}

	@Override
	public void deleteAllCustomers() {
		customerRepository.deleteAll();
	}

	@Override
	public List<Customer> findAllCustomers() {
		return customerRepository.findAll();
	}

	@Override
	public boolean doesCustomerExist(Customer customer) {
		return findByLastNameAndFirstName(customer.getLastName(), customer.getFirstName()) != null;
	}

}
