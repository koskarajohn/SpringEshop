import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UserCredentials } from 'src/app/models/userCredentials';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  
  userCredentials : UserCredentials;
  emailDoesNotExistErrorMessage : string = 'Δεν υπάρχει λογαριασμός με αυτό το email';
  passwordIsNotCorrectErrorMessage : string = 'Ο κωδικός δεν είναι σωστός';
  genericError : string = 'Κάτι πήγε στραβά';

  emailDoesNotExist : boolean = false;
  passwordIsNotCorrect : boolean = false;
  isRedirectedFromRegister : boolean =  false;
  routeSubscription : Subscription;

  constructor(private route : ActivatedRoute, private router : Router,  private authenticationService : AuthenticationService) { }

  ngOnInit() {
    this.userCredentials = {} as UserCredentials;
    this.routeSubscription = this.route.queryParams.subscribe(params => {
      if(params['redirect'] === 'register') this.isRedirectedFromRegister = true;
    });
  }

   async login() {
    let authenticationMessage = await this.authenticationService.login(this.userCredentials);
    if(authenticationMessage === this.emailDoesNotExistErrorMessage){
      this.emailDoesNotExist = true;
      this.passwordIsNotCorrect = false;
    }else if(authenticationMessage === this.passwordIsNotCorrectErrorMessage){
      this.emailDoesNotExist = false;
      this.passwordIsNotCorrect = true;
    }else if(authenticationMessage === this.genericError){
      this.emailDoesNotExist = false;
      this.passwordIsNotCorrect = false;
    }else{
      this.router.navigate(['']);
    }
  }

  ngOnDestroy(): void {
    if(this.routeSubscription !== undefined) this.routeSubscription.unsubscribe();
  }

}
