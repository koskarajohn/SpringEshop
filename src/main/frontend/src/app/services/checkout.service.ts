import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { OrderDetails } from '../models/orderDetails';
import { Observable } from 'rxjs';
import { CartProduct } from '../models/cartProduct';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private orderApiEndpoint = '/api/orders';
  public order = {} as Order;
  public orderProducts : CartProduct[] = [] ;

  constructor(private http : HttpClient) { }

  addOrder(orderDetails : OrderDetails) : Observable<Order>{
    return this.http.post<Order>(this.orderApiEndpoint, orderDetails);
  }

  getCurrentOrder() : Order{
    return this.order;
  }

  setCurrentOrder(order : Order) : void{
    this.order = order;
  }

  getOrderProducts() : CartProduct[]{
    return this.orderProducts;
  }

  setOrderProducts(orderProducts : CartProduct[]) : void{
    this.orderProducts = orderProducts;
  }
}
