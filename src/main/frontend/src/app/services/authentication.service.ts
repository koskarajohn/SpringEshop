import { Injectable } from '@angular/core';
import { Session } from '../models/session';
import { UserCredentials } from '../models/userCredentials';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { CookieService } from 'ngx-cookie-service';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public isAuthenticated : boolean = false;
  private wasServiceJustInitialized = false;

  private validateUserApiEndpoint =  '/authentication/validateuser';
  private sessionApiEndpoint =  '/authentication/session';
  private logoutApiEndpoint = '/authentication/logout';

  constructor(private http : HttpClient, private cookieService :  CookieService, private router : Router) {
    this.checkIfUserLoggedInPreviously();
  }

  async checkIfUserLoggedInPreviously(){
    this.wasServiceJustInitialized = true;
    let isAuthenticatedCookieValueYes = this.cookieService.get('IS_AUTHENTICATED') === 'yes';
    let isAuthenticatedCookieDeletedOrNo = this.cookieService.get('IS_AUTHENTICATED') === 'no' || !this.cookieService.check('IS_AUTHENTICATED');
    let wasLocalStorageDeleted = localStorage.length === 0;

    if(isAuthenticatedCookieDeletedOrNo && !wasLocalStorageDeleted){
      this.isAuthenticated = false;
      if(!wasLocalStorageDeleted) localStorage.clear();
      this.navigateToIndexPage();
    }else if(isAuthenticatedCookieValueYes && wasLocalStorageDeleted){
      await this.logout();
    }else if(isAuthenticatedCookieDeletedOrNo){
      this.isAuthenticated = false;
    }else{
      this.isAuthenticated = true;
    }

    this.wasServiceJustInitialized = false;
  }

  async login(credentials : UserCredentials) : Promise<string>{
    let message : string = '';

    await this.http.post<User>(this.validateUserApiEndpoint, credentials).toPromise()
                             .then(async user => {
                                let headers = new HttpHeaders();
                                headers = headers.append('Authorization', 'Basic ' + btoa(user.username + ':' + credentials.password));

                                await this.http.get<Session>(this.sessionApiEndpoint, {headers : headers}).toPromise()
                                    .then( session => {
                                      message = "Επιτυχημένη είσοδος χρήστη";
                                      localStorage.setItem("session_id", session.id);
                                      localStorage.setItem("user", session.username);
                                      localStorage.setItem("type", session.type);
                                      this.isAuthenticated = true;
                                    })

                                    .catch(errorResponse => {
                                      message = "Κάτι πήγε στραβά";
                                      this.isAuthenticated = false;
                                    });
                              })

                             .catch(errorResponse => {
                                message =  errorResponse.error.errorMessage;
                                this.isAuthenticated = false;
                             });

    return message;
  }

  logout(){
    return this.http.post(this.logoutApiEndpoint, {}).toPromise()
                                                    .then(response => {
                                                      this.isAuthenticated = false;
                                                      if(localStorage.length > 0) localStorage.clear();
                                                      this.navigateToIndexPage();
                                                    })
                                                    .catch();
  }

  navigateToIndexPage(): void{
    if(this.router.url === '/' && !this.wasServiceJustInitialized){
      window.location.reload(); // User logins correctly, navigates to index and logouts from index
    }else if(this.router.url === '/' && this.wasServiceJustInitialized){
      // User logins correctly, deletes local storage and request localhost:8080 again
    }else{
      this.router.navigate(['']);
    }
    
  }
}
