import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, empty} from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Injectable()
export class AuthenticationStatusChangeInterceptor  implements  HttpInterceptor{

    constructor(private authenticationService : AuthenticationService, private cookieService : CookieService, private router : Router){}

    intercept(request: HttpRequest<any>, next: HttpHandler) :  Observable<HttpEvent<any>>{

        //let isAuthenticatedCookieValueYes = this.cookieService.get('IS_AUTHENTICATED') === 'yes';
        //let isAuthenticationCookie
       // let isLocalStorageEmpty = localStorage.length === 0;

        //if( (){
        //    if(!isLocalStorageEmpty) localStorage.clear();
        //    this.authenticationService.isAuthenticated = false;
         //   this.router.navigate(['']);
        //    return empty();
        //}else{
        //    return next.handle(request);
       // }
       return next.handle(request);
    }

}