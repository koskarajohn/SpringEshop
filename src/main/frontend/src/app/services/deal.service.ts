import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Deal} from '../models/deal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DealService {

  private dealsApi = '/api/deals';

  constructor(private http : HttpClient ) { }

  getDeals() : Observable<Deal[]>{
    return this.http.get<Deal[]>(this.dealsApi);
  }
}
