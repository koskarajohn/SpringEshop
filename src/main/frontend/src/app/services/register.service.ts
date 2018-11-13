import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private registerApiEndpoint = '/api/register';

  constructor(private http : HttpClient) { }

  registerUser(user : User) : Observable<User>{
    return this.http.post<User>(this.registerApiEndpoint, user);
  }

}
