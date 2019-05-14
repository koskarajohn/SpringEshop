import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from '../models/userData';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersApiEndpoint = '/api/users/';

  constructor(private http : HttpClient) { }

  getUser(id : string) : Observable<UserData>{
    return this.http.get<UserData>(this.usersApiEndpoint + id);
  }
}
