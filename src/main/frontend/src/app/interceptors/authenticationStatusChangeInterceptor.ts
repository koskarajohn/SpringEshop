import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, empty} from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthenticationStatusChangeInterceptor  implements  HttpInterceptor{

    constructor(private authenticationService : AuthenticationService, private cookieService : CookieService, private router : Router){}

    intercept(request: HttpRequest<any>, next: HttpHandler) :  Observable<HttpEvent<any>>{

        let isUserCurrentlyAuthenticated = this.authenticationService.isAuthenticated;
        let isAuthenticatedCookieValueYes = this.cookieService.get('IS_AUTHENTICATED') === 'yes';
        let isAuthenticatedCookieDeletedOrNo = this.cookieService.get('IS_AUTHENTICATED') === 'no' || !this.cookieService.check('IS_AUTHENTICATED');
        let wasLocalStorageDeleted = localStorage.length === 0;

        if(isUserCurrentlyAuthenticated && isAuthenticatedCookieDeletedOrNo){
            this.authenticationService.isAuthenticated = false;
            if(!wasLocalStorageDeleted) localStorage.clear();
            this.navigateToIndexPage();
            return empty();
        }else if(isUserCurrentlyAuthenticated && isAuthenticatedCookieValueYes && wasLocalStorageDeleted){
           // this.authenticationService.logoutIfUserDeletesLocalStorage();
            this.navigateToIndexPage();
            return empty();
        }else{
            return next.handle(request);
        }
    }

    navigateToIndexPage(): void{
        if(this.router.url === '/'){
          window.location.reload();
        }else{
          this.router.navigate(['']);
        }    
    }

}