import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartProduct } from '../models/cartProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartApiEndpoint = '/api/carts/';
  private productsPath = '/products/';

  constructor(private http : HttpClient) { }

  getCartProducts(userId : string) : Observable<CartProduct[]>{
    return this.http.get<CartProduct[]>(this.cartApiEndpoint + userId);
  }
}
