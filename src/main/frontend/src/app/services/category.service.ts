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
  private brandsPath = '/brands';
  private rangesPath = '/ranges';
  private productsPath = '/products';
  private categoryParameter = "?category=";
  private brandParameter = '?brand=';
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

  getCategoryProductsNumberByBrand(category : string, brands : Brand[], rangeParameters : number[]) : Observable<ProductsPerBrand>{
    if(rangeParameters.length === 0){
      return from(brands).pipe(mergeMap(brand => <Observable<ProductsPerBrand>> this.http.get<ProductsPerBrand>(this.categoryProductsApi + category + this.brandsPath + '/' +brand.name + this.productsPath + this.countPath)));
    }else{
      let paramString = '';

      rangeParameters.forEach((range, index) => {
        paramString =  index === 0 ? paramString + this.rangeParameter + range : paramString + this.rangeParameterAnd + range;
      });

      return from(brands).pipe(mergeMap(brand => <Observable<ProductsPerBrand>> this.http.get<ProductsPerBrand>(this.categoryProductsApi + category + this.brandsPath + '/' +brand.name + this.productsPath + this.countPath + paramString)));
    }
  }

  getCategoryProductsNumberByPriceRange(category : string, priceRanges : PriceRange[], brandParameters : string[]) : Observable<ProductsPerPriceRange>{
    if(brandParameters.length === 0){
      return from(priceRanges).pipe(mergeMap(range => <Observable<ProductsPerPriceRange>> this.http.get<ProductsPerPriceRange>(this.categoryProductsApi + category + this.rangesPath + '/' + range.id + this.productsPath + this.countPath)));
    }else{
      let paramString = '';

      brandParameters.forEach((brand, index) => {
        paramString =  index === 0 ? paramString + this.brandParameter + brand : paramString + this.brandParameterAnd + brand;
      });

      return from(priceRanges).pipe(mergeMap(range => <Observable<ProductsPerPriceRange>> this.http.get<ProductsPerPriceRange>(this.categoryProductsApi + category + this.rangesPath + '/' + range.id + this.productsPath + this.countPath + paramString)));
    }
    
  }
}
