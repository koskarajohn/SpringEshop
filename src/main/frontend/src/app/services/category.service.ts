import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Product } from '../models/product';
import { PriceRange } from '../models/priceRange';
import { Brand } from '../models/brand';
import { mergeMap, concatMap } from 'rxjs/operators';
import { ProductsPerBrand } from '../models/productsPerBrand';
import { ProductsPerPriceRange } from '../models/productsPerPriceRange';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryProductsApi = '/api/categories/';
  private categoryBrands = "/api/brands";
  private countPath = "/count";
  private categoryParameter = "?category=";
  private brandParameter = "?brand=";
  private minParameter = "?min=";
  private maxParameter ="&max=";

  constructor(private http : HttpClient) { }

  getCategoryProducts(category : string) : Observable<Product[]>{
    return this.http.get<Product[]>(this.categoryProductsApi + category);
  }

  getCategoryBrands(category : string) : Observable<Brand[]>{
    return this.http.get<Brand[]>(this.categoryBrands + this.categoryParameter +  category);
  }

  getCategoryProductsNumberByBrand(category : string, brands : Brand[]) : Observable<ProductsPerBrand>{
    return from(brands).pipe(mergeMap(brand => <Observable<ProductsPerBrand>> this.http.get<ProductsPerBrand>(this.categoryProductsApi + category + this.countPath + this.brandParameter + brand.name)));
  }

  getCategoryProductsNumberByPriceRange(category : string, priceRanges : PriceRange[]) : Observable<ProductsPerPriceRange>{
    return from(priceRanges).pipe(mergeMap(range => <Observable<ProductsPerPriceRange>> this.http.get<ProductsPerPriceRange>(this.categoryProductsApi + category + this.countPath + this.minParameter + range.min + this.maxParameter + range.max)));
  }
}
