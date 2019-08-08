package springeshop.model;

import javax.validation.constraints.Email;

public class ResetPasswordRequest {

	@Email
	private String email;
	
	public ResetPasswordRequest() {}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}
