import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { mergeMap} from 'rxjs/operators';
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

  deleteUserCart(userId : number) : Observable<any>{
    return this.http.delete(this.cartApiEndpoint + '/' + userId);
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

  addMultipleProductsTocart(cartProducts : CartProduct[]) : Observable<CartProduct>{
    return from(cartProducts).pipe(mergeMap(cartProduct => <Observable<CartProduct>> this.http.post<CartProduct>(this.cartApiEndpoint, cartProduct)));
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

  //Anonymous

  createAnonymousUserCart() : void{
    if(!this.doesAnonymousUserCartExist()){
      let cart : CartProduct[] = [];
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  updateAnonymousUserCart(cart : CartProduct[]) : void{
    if(this.doesAnonymousUserCartExist()){
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  getAnonymousUserCart() : CartProduct[]{
    let cart = JSON.parse(localStorage.getItem('cart')) as CartProduct[];
    return cart;
  }

  doesAnonymousUserCartExist() : boolean{
    return localStorage.getItem('cart') !== null;
  }

  getAnonymousUserCartCount() : number{
    let count = 0;
    if(!this.doesAnonymousUserCartExist) 
       return count;

    this.getAnonymousUserCart().forEach(cartProduct => count += cartProduct.quantity);
    return count;
  }

  getAnonymousUserCartProduct(cart : CartProduct[], productid : number) : CartProduct{
    let index = cart.findIndex(x => x.productid === productid);
    return cart[index];
  }

  doesAnonymousUserCartContaintProduct(productid : number) : boolean{
    let cart = this.getAnonymousUserCart();
    return cart.find(x => x.productid === productid) !== undefined;
  }

  addProductToAnonymousUserCart(cartProduct : CartProduct){

    if(!this.doesAnonymousUserCartExist())
       this.createAnonymousUserCart();

    let cart = this.getAnonymousUserCart();
    if(this.doesAnonymousUserCartContaintProduct(cartProduct.productid)){
      let existingProduct = this.getAnonymousUserCartProduct(cart, cartProduct.productid);
      existingProduct.quantity += cartProduct.quantity;
    }else{
      cart.push(cartProduct);
    }

    this.updateAnonymousUserCart(cart);
  }

  updateUserCartProduct(cartProduct : CartProduct){
    let cart = this.getAnonymousUserCart();
    let existingProduct = this.getAnonymousUserCartProduct(cart, cartProduct.productid);
    existingProduct.quantity = cartProduct.quantity;
    this.updateAnonymousUserCart(cart);
  }
}
