package springeshop.service;

import java.util.List;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import springeshop.model.CartProduct;
import springeshop.model.Order;
import springeshop.model.OrderDetails;

@Component
public class EmailServiceImpl implements EmailService{
	
	@Autowired
	private JavaMailSender emailSender;
	
	@Autowired
    private TemplateEngine templateEngine;

	@Override
	@Async
	public void sendEmail(Order order, List<CartProduct> cartProducts) {
		try {
			String processedHTMLTemplate = this.constructHTMLTemplate(order, cartProducts);
			
			MimeMessage message = emailSender.createMimeMessage();
			MimeMessageHelper helper = new MimeMessageHelper(message, false, "UTF-8");
			helper.setTo(order.getEmail()); 
			helper.setSubject("Παραγγελία " + order.getId()); 
			helper.setText(processedHTMLTemplate, true);
	        emailSender.send(message);
		} catch (MessagingException e) {
			e.printStackTrace();
		}
	}
	
	private String constructHTMLTemplate(Order order, List<CartProduct> cartProducts) {
        Context context = new Context();
        context.setVariable("order", order);
        context.setVariable("userFullName", getUserName(order));
        context.setVariable("billingInfoFullName", order.getBillingInfo().getFirst_name() + " " + order.getBillingInfo().getLast_name());
        context.setVariable("shippingInfoFullName", order.getShippingInfo().getFirst_name() + " " + order.getShippingInfo().getLast_name());
        context.setVariable("cartProducts", cartProducts);
        context.setVariable("totalCartPrice", getTotalCartPrice(cartProducts));
        return templateEngine.process("email", context);
    }
	
	private double getTotalCartPrice(List<CartProduct> cartProducts){
		double total = 0;
		
		for(CartProduct cartProduct : cartProducts){
			total += cartProduct.getQuantity() * cartProduct.getPrice();
		}
		
		return total;
	}

	private String getUserName(Order order){
		return order.getUser() == null ? null : order.getUser().getFirst_name() + ' ' + order.getUser().getLast_name();
	}
}
