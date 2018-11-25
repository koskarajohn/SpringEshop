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

  addProductTocart(userId : number, productId : number) : Observable<any>{
    let body : any = { "userid" : userId, "productid" : productId, quantity : 1};
    return this.http.post(this.cartApiEndpoint, body);
  }

  getCartProduct(userId : number, productId : number) : Observable<CartProduct>{
    return this.http.get<CartProduct>(this.cartApiEndpoint + userId + this.productsPath + productId);
  }

  deleteCartProduct(userId : number, productId : number) : Observable<any>{
    return this.http.delete(this.cartApiEndpoint + userId + this.productsPath + productId);
  }

  updateCartProduct(userId : number, productId : number, quantity : number) : Observable<any>{
    let body : any = { "quantity" : quantity};
    return this.http.delete(this.cartApiEndpoint + userId + this.productsPath + productId, body);
  }
}
