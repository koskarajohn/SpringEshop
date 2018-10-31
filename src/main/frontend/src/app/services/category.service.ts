import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryProductsApi = '/api/categories/';

  constructor(private http : HttpClient) { }

  getCategoryProducts(category : string) : Observable<Product[]>{
    return this.http.get<Product[]>(this.categoryProductsApi + category);
  }
}
