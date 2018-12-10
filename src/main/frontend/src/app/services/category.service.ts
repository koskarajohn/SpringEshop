import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { PriceRange } from '../models/priceRange';
import { Brand } from '../models/brand';
import { mergeMap, concatMap } from 'rxjs/operators';
import { ProductsPerBrand } from '../models/productsPerBrand';
import { ProductsPerPriceRange } from '../models/productsPerPriceRange';
import { ProductPage } from '../models/productPage';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryProductsApi = '/api/categories/';
  private categoryBrands = "/api/brands";
  private countPath = "/count";
  private categoryParameter = "?category=";
  private brandParameter = "?brand=";
  private brandParameterAnd = '&brand=';
  private rangeParameter = "?range=";
  private rangeParameterAnd = "&range=";
  private pageParameter = "?page=";
  private orderParameter = "&order=";

  constructor(private http : HttpClient) { }

  getCategoryProductsPage(category : string, page : number, order : string, brandParameters : string[], rangeParameters : string[]) : Observable<ProductPage>{

    if(brandParameters.length === 0 && rangeParameters.length === 0){
      return this.http.get<ProductPage>(this.categoryProductsApi + category + this.pageParameter + page + this.orderParameter + order);
    }else{
      let paramString = '';

      if(brandParameters.length > 0){
        brandParameters.forEach(brand => paramString = paramString + this.brandParameterAnd + brand);
      }

      if(rangeParameters.length > 0){
        rangeParameters.forEach(range => paramString = paramString + this.rangeParameterAnd + range);
      }
      
      return this.http.get<ProductPage>(this.categoryProductsApi + category + this.pageParameter + page + this.orderParameter + order + paramString);
    }
    
  }

  getCategoryBrands(category : string) : Observable<Brand[]>{
    return this.http.get<Brand[]>(this.categoryBrands + this.categoryParameter +  category);
  }

  getCategoryProductsNumberByBrand(category : string, brands : Brand[]) : Observable<ProductsPerBrand>{
    return from(brands).pipe(mergeMap(brand => <Observable<ProductsPerBrand>> this.http.get<ProductsPerBrand>(this.categoryProductsApi + category + this.countPath + this.brandParameter + brand.name)));
  }

  getCategoryProductsNumberByPriceRange(category : string, priceRanges : PriceRange[]) : Observable<ProductsPerPriceRange>{
    return from(priceRanges).pipe(mergeMap(range => <Observable<ProductsPerPriceRange>> this.http.get<ProductsPerPriceRange>(this.categoryProductsApi + category + this.countPath + this.rangeParameter + range.id)));
  }
}
