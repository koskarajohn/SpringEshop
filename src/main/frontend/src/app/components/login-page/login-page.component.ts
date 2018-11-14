import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserCredentials } from 'src/app/models/userCredentials';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  
  userCredentials : UserCredentials;
  emailDoesNotExistErrorMessage : string = 'Δεν υπάρχει λογαριασμός με αυτό το email';
  passwordIsNotCorrectErrorMessage : string = 'Ο κωδικός δεν είναι σωστός';


  emailDoesNotExist : boolean = false;
  passwordIsNotCorrect : boolean = false;
  isRedirectedFromRegister : boolean =  false;
  httpSubscription : Subscription;
  routeSubscription : Subscription;

  constructor(private route : ActivatedRoute, private router : Router,  private loginService : LoginService) { }

  ngOnInit() {
    this.userCredentials = {} as UserCredentials;
    this.routeSubscription = this.route.queryParams.subscribe(params => {
      if(params['redirect'] === 'register') this.isRedirectedFromRegister = true;
    });
  }

  onSubmit() : void{
    this.httpSubscription = this.loginService.validateUser(this.userCredentials).subscribe(
      user => {
        this.loginService.getToken(user, this.userCredentials).subscribe(session => {
          console.log(session);
          this.router.navigate(['']);
        });
      },

      errorResponse => {
        this.setProperFieldError(errorResponse.error.errorMessage);
      }
    );
  }

  setProperFieldError(message : string) : void{
    if(message === this.emailDoesNotExistErrorMessage){
      this.emailDoesNotExist = true;
      this.passwordIsNotCorrect = false;
    }else if(message === this.passwordIsNotCorrectErrorMessage){
      this.emailDoesNotExist = false;
      this.passwordIsNotCorrect = true;
    }
  }

  ngOnDestroy(): void {
    if(this.routeSubscription !== undefined) this.routeSubscription.unsubscribe();
    if(this.httpSubscription !== undefined) this.httpSubscription.unsubscribe();
  }

}
