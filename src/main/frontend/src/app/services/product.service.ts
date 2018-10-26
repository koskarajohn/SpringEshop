import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productListsApi = '/api/products?filter=favorite';

  constructor(private http : HttpClient) { }

  getProductList() : Observable<Product[][]>{
    return this.http.get<Product[][]>(this.productListsApi);
  }
}
