import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { ProductPage } from '../models/productPage';
import { ProductsPerPriceRange } from '../models/productsPerPriceRange';
import { mergeMap } from 'rxjs/operators';
import { PriceRange } from '../models/priceRange';
import { Brand } from '../models/brand';
import { ProductsPerBrand } from '../models/productsPerBrand';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  private searchApi = '/api/search';
  private brandsPath = '/brands';
  private countPath = '/count';
  private productsPath = '/products';
  private rangesPath = '/ranges';

  private brandParam = '&brand=';
  private brandParameterAnd = '&brand=';
  private pageParam = "?page=";
  private searchParam = "?keyword=";
  private searchParamAnd =  '&keyword=';
  private rangeParameterAnd = '&range=';
  private orderParam = '&order=';

  constructor(private http : HttpClient) { }

  getSearchProducts(searchParameters : string[], page : number, order : string, brandParameters : string[], rangeParameters : string[]) : Observable<ProductPage>{
    let paramString = this.pageParam + page;
    searchParameters.forEach(keyword => paramString = paramString + this.searchParamAnd + keyword);

    if(brandParameters.length > 0){
      brandParameters.forEach(brand => paramString = paramString + this.brandParameterAnd + brand);
    }

    if(rangeParameters.length > 0){
      rangeParameters.forEach(range => paramString = paramString + this.rangeParameterAnd + range);
    }

    paramString = paramString + this.orderParam + order;

    return this.http.get<ProductPage>(this.searchApi + paramString);
  }

  getSearchProductsNumberByPriceRange(searchTerms : string[], priceRanges : PriceRange[], brandParameters : string[]) : Observable<ProductsPerPriceRange>{
    let paramString = '';

    searchTerms.forEach((keyword, index) => {
      paramString = index === 0 ? paramString = paramString + this.searchParam + keyword : paramString = paramString + this.searchParamAnd + keyword;
    });

    if(brandParameters.length > 0){
      brandParameters.forEach((brand) => {
        paramString =  paramString + this.brandParam + brand;
      });
    }
    
    return from(priceRanges).pipe(mergeMap(range => <Observable<ProductsPerPriceRange>> this.http.get<ProductsPerPriceRange>(this.searchApi + this.rangesPath + '/' + range.id + this.productsPath + this.countPath + paramString)));
  }

  getSearchBrands(searchParameters : string[]) : Observable<Brand[]>{
    let paramString = '';
    searchParameters.forEach((keyword, index) => {
      paramString = index === 0 ? paramString = paramString + this.searchParam + keyword : paramString = paramString + this.searchParamAnd + keyword;
    });
    return this.http.get<Brand[]>(this.searchApi + this.brandsPath + paramString);
  }

  getSearchProductsNumberByBrand(searchTerms : string[], brands : Brand[],  rangeParameters : number[]) : Observable<ProductsPerBrand>{
    let paramString = '';
    searchTerms.forEach((keyword, index) => {
      paramString = index === 0 ? paramString = paramString + this.searchParam + keyword : paramString = paramString + this.searchParamAnd + keyword;
    });

    if(rangeParameters.length > 0){
      rangeParameters.forEach(range => {
        paramString =  paramString + this.rangeParameterAnd + range;
      });

    }

    return from(brands).pipe(mergeMap(brand => <Observable<ProductsPerBrand>> this.http.get<ProductsPerBrand>(this.searchApi + this.brandsPath + '/' + brand.name + this.productsPath + this.countPath + paramString)));
  }

}
