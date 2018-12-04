import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { OrderDetails } from '../models/orderDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private orderApiEndpoint = '/api/orders';

  constructor(private http : HttpClient) { }

  addOrder(orderDetails : OrderDetails) : Observable<Order>{
    return this.http.post<Order>(this.orderApiEndpoint, orderDetails);
  }
}
