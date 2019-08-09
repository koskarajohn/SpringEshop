import { Component, OnInit } from '@angular/core';
import { ResetPasswordRequest } from 'src/app/models/resetPasswordRequest';
import { ResetPasswordService } from 'src/app/services/reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  private resetPasswordRequest = {} as ResetPasswordRequest;
  private emailDoesNotExist = false;
  private wasResetPasswordSuccessful : boolean = false;
  emailDoesNotExistErrorMessage : string = 'Δεν υπάρχει λογαριασμός με αυτό το email';

  constructor(private resetPasswordService : ResetPasswordService) { }

  ngOnInit() {
  }

  onSubmit() : void {
    this.resetPasswordService.resetPassword(this.resetPasswordRequest).toPromise()
                                                                      .then( response => {
                                                                        this.emailDoesNotExist = false;
                                                                        this.wasResetPasswordSuccessful = true;
                                                                      })
                                                                      .catch(error => {
                                                                        if(error.status === 400){
                                                                          this.emailDoesNotExist = true;
                                                                        }
                                                                        this.wasResetPasswordSuccessful = false;
                                                                      });
  }

}
