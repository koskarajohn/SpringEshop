import { Component, OnInit, OnDestroy } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { User } from 'src/app/models/user';
import { Subscription } from 'rxjs';
import { ErrorMessage } from 'src/app/models/errorMessage';
import {Router} from "@angular/router"

@Component({
  selector: 'register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit, OnDestroy {

  user : User;
  errorMessage : ErrorMessage;
  usernameError : boolean = false;
  emailError : boolean = false;
  httpSubscription : Subscription;

  constructor(private registerService : RegisterService, private router: Router) { }

  ngOnInit() {
    this.user = {} as User;
    this.errorMessage = {} as ErrorMessage;
  }

  onSubmit(): void {
    this.httpSubscription = this.registerService.registerUser(this.user).subscribe(
      user => this.router.navigate(['/login'], {queryParams : { redirect : 'register'}}), 

      errorResponse => {
      this.setProperFieldError(errorResponse.error.errorMessage);
      });
  }

  setProperFieldError(message : string) : void{
    if(message.includes('username')){
      this.usernameError = true;
      this.emailError = false;
    }else if(message.includes('email')){
      this.usernameError = false;
      this.emailError = true;
    }
  }

  arePasswordsFieldsTheSame() : boolean{
    return this.user.password === this.user.confirm_password;
  }

  ngOnDestroy(){
    if(this.httpSubscription !== undefined)this.httpSubscription.unsubscribe();
  }

}
