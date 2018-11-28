import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, empty} from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { CartService } from '../services/cart.service';

@Injectable()
export class AuthenticationStatusChangeInterceptor  implements  HttpInterceptor{

    constructor(private authenticationService : AuthenticationService, private cartService : CartService, private cookieService : CookieService, private router : Router){}

    intercept(request: HttpRequest<any>, next: HttpHandler) :  Observable<HttpEvent<any>>{

        let isUserCurrentlyAuthenticated = this.authenticationService.isAuthenticated;
        let isAuthenticatedCookieDeletedOrNo = this.cookieService.get('IS_AUTHENTICATED') === 'no' || !this.cookieService.check('IS_AUTHENTICATED');
        let wasLocalStorageDeleted = localStorage.length === 0;

       return  this.handleReqeuestsWhereAuthenticationStatusChanged(isUserCurrentlyAuthenticated, isAuthenticatedCookieDeletedOrNo, 
        wasLocalStorageDeleted, request, next);
    }



    handleReqeuestsWhereAuthenticationStatusChanged(isUserCurrentlyAuthenticated : boolean, isAuthenticatedCookieDeletedOrNo : boolean, 
        wasLocalStorageDeleted : boolean, request: HttpRequest<any>, next: HttpHandler) {

            if(isUserCurrentlyAuthenticated && isAuthenticatedCookieDeletedOrNo){
                this.authenticationService.isAuthenticated = false;
                if(!wasLocalStorageDeleted) localStorage.clear();
                this.cartService.createAnonymousUserCart();
                this.authenticationService.getAnonymousSession();
                this.navigateToIndexPage();
                return empty();
            }

            return next.handle(request);
    }

    navigateToIndexPage() : void{
        if(this.router.url === '/'){
          window.location.reload();
        }else{
          this.router.navigate(['']);
        }    
    }

}