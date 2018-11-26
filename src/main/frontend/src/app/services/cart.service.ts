import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartProduct } from '../models/cartProduct';
import { CartProductCount } from '../models/cartProductCount';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartApiEndpoint = '/api/carts';
  private productsPath = '/products';
  private countPath = '/count';

  constructor(private http : HttpClient) { }

  getCartProducts(userId : string) : Observable<CartProduct[]>{
    return this.http.get<CartProduct[]>(this.cartApiEndpoint + '/' + userId);
  }

  getCartProductsCount(userId : string) : Observable<CartProductCount>{
    return this.http.get<CartProductCount>(this.cartApiEndpoint + '/' + userId + this.countPath);
  }

  addProductTocart(userId : number, productId : number, quantity : number) : Observable<CartProduct>{
    let cartProduct = {} as CartProduct;
    cartProduct.userid = userId;
    cartProduct.productid = productId;
    cartProduct.quantity = quantity;
    return this.http.post<CartProduct>(this.cartApiEndpoint, cartProduct);
  }

  getCartProduct(userId : number, productId : number) : Observable<CartProduct>{
    return this.http.get<CartProduct>(this.cartApiEndpoint + '/' + userId + this.productsPath + '/' + productId);
  }

  deleteCartProduct(userId : number, productId : number) : Observable<any>{
    return this.http.delete(this.cartApiEndpoint + '/' + userId + this.productsPath + '/' + productId);
  }

  updateCartProduct(cartProduct : CartProduct) : Observable<any>{
    return this.http.patch(this.cartApiEndpoint + '/' + cartProduct.userid + this.productsPath + '/' + cartProduct.productid, cartProduct);
  }
}
