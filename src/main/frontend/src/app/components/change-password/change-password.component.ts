import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResetPasswordService } from 'src/app/services/reset-password.service';
import { ChangePasswordRequest } from 'src/app/models/changePasswordRequest';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit, OnDestroy {

  private changePasswordRequest = {} as ChangePasswordRequest;
  private confirmationPassword : string;
  private wasPasswordChangeCorrect : boolean = false;
  private token : string ;
  private isTokenExpired : boolean = false;
  private isTokenInvalid : boolean = false;
  paramRouteSubscription : Subscription;

  constructor(private route : ActivatedRoute, private resetPasswordService : ResetPasswordService) { }

  ngOnInit() {
    this.paramRouteSubscription = this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });
  }

  arePasswordsFieldsTheSame() : boolean{
    return this.changePasswordRequest.password === this.confirmationPassword;
  }

  onSubmit() : void{
    if(this.arePasswordsFieldsTheSame()){
      this.resetPasswordService.changePassword(this.changePasswordRequest, this.token).toPromise()
      .then(response => {
        this.isTokenInvalid = false;
        this.isTokenExpired = false;
        this.wasPasswordChangeCorrect = true;
      })
      .catch(error => {
        if(error.status  === 400){
          this.isTokenInvalid = true;
          this.isTokenExpired = false;
        }else if(error.status === 401){
          this.isTokenInvalid = false;
          this.isTokenExpired = true;
        }
      });
    }
  }

  ngOnDestroy(): void {
    if(this.paramRouteSubscription !== undefined) this.paramRouteSubscription.unsubscribe();
  }

}
