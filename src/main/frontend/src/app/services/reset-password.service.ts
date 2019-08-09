import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResetPasswordRequest } from '../models/resetPasswordRequest';
import { Observable } from 'rxjs';
import { ChangePasswordRequest } from '../models/changePasswordRequest';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  private resetPasswordApiEndpoint = '/api/user/resetPassword';
  private changePasswordApiEndpoint = '/api/user/changePassword';
  private tokenParam = '?token=';

  constructor(private http : HttpClient) { }

  resetPassword(resetPasswordRequest : ResetPasswordRequest) : Observable<any>{
    return this.http.post<any>(this.resetPasswordApiEndpoint, resetPasswordRequest);
  }

  changePassword(changePasswordRequest : ChangePasswordRequest, token : string) : Observable<any>{
    return this.http.post<any>(this.changePasswordApiEndpoint + this.tokenParam + token, changePasswordRequest);
  }
}
