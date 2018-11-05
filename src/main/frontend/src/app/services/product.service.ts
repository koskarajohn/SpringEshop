import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Product } from '../models/product';
import { ProductPage } from '../models/productPage';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productListsApi = '/api/products';
  private favoriteParam = '?filter=favorite';
  private newParam = '?filter=new';
  private pageParam = '&page=';

  constructor(private http : HttpClient) { }

  getFavoriteProductsInformation() : Observable<ProductPage>{
    return this.http.get<ProductPage>(this.productListsApi + this.favoriteParam + this.pageParam + '0');
  }

  getNewProductsInformation() : Observable<ProductPage>{
    return this.http.get<ProductPage>(this.productListsApi + this.newParam + this.pageParam + '0');
  }

  getFavoriteProducts(pages : number[]) : Observable<ProductPage>{
    return from(pages).pipe(mergeMap(page => <Observable<ProductPage>> this.http.get<ProductPage>(this.productListsApi + this.favoriteParam + this.pageParam + page)));
  }

  getNewProducts(pages : number[]) : Observable<ProductPage>{
    return from(pages).pipe(mergeMap(page => <Observable<ProductPage>> this.http.get<ProductPage>(this.productListsApi + this.newParam + this.pageParam + page)));
  }

  getSingleProduct(name : string) : Observable<Product>{
    return this.http.get<Product>(this.productListsApi + '/' + name);
  }
}
