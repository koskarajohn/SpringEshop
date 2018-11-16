import { Injectable } from '@angular/core';
import { Session } from '../models/session';
import { UserCredentials } from '../models/userCredentials';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public isAuthenticated : boolean = false;

  private validateUserApiEndpoint =  '/authentication/validateuser';
  private sessionApiEndpoint =  '/authentication/session';
  private logoutApiEndpoint = '/authentication/logout';

  constructor(private http : HttpClient) {
    this.checkIfUserLoggedInPreviously();
  }

  checkIfUserLoggedInPreviously() : void{
    let authenticationValue = localStorage.getItem('is_authenticated');
    let didUserLogInPreviously = authenticationValue === 'yes';
    this.isAuthenticated = didUserLogInPreviously ? true : false;
    if(!this.isAuthenticated) localStorage.setItem('is_authenticated', 'no');
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
                                      localStorage.setItem('is_authenticated', 'yes');
                                      this.isAuthenticated = true;
                                    })

                                    .catch(errorResponse => {
                                      message = "Κάτι πήγε στραβά";
                                      this.isAuthenticated = false;
                                      localStorage.setItem('is_authenticated', 'no');
                                    });
                              })

                             .catch(errorResponse => {
                                message =  errorResponse.error.errorMessage;
                                this.isAuthenticated = false;
                                localStorage.setItem('is_authenticated', 'no');
                             });

    return message;
  }

  async logout(callback){
    await this.http.post(this.logoutApiEndpoint, {}).toPromise()
                                                    .then(response => {
                                                      this.isAuthenticated = false;
                                                      localStorage.clear();
                                                      localStorage.setItem('is_authenticated', 'no');
                                                      callback();
                                                    })
                                                    .catch();
  }
}
