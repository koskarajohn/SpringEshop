import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { UserCredentials } from '../models/userCredentials';
import { User } from '../models/user';
import { Session } from '../models/session';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private validateUserApiEndpoint =  '/authentication/validateuser';
  private sessionApiEndpoint =  '/authentication/session';

  constructor(private http : HttpClient) { }

  validateUser(userCredentials : UserCredentials) : Observable<User>{
    return this.http.post<User>(this.validateUserApiEndpoint, userCredentials);
  }

  getToken(user : User, userCredentials : UserCredentials) : Observable<Session>{

    let headers = new HttpHeaders();
     headers = headers.append('Authorization', 'Basic ' + btoa(user.username + ':' + userCredentials.password));
    return this.http.get<Session>(this.sessionApiEndpoint, {headers : headers});
  }
}
