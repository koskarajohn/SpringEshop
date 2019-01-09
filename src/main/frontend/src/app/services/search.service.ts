import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { ProductPage } from '../models/productPage';
import { ProductsPerPriceRange } from '../models/productsPerPriceRange';
import { mergeMap } from 'rxjs/operators';
import { PriceRange } from '../models/priceRange';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  private searchApi = '/api/search';
  private countPath = '/count';
  private brandParam = '&brand=';
  private rangeParam = '?rangeid=';
  private pageParam = "?page=";
  private searchParam = "&keyword=";
  constructor(private http : HttpClient) { }

  getSearchProducts(searchParameters : string[], page : number) : Observable<ProductPage>{
    let paramString = this.pageParam + page;
    searchParameters.forEach(keyword => paramString = paramString + this.searchParam + keyword);
    return this.http.get<ProductPage>(this.searchApi + paramString);
  }

  getSearchProductsNumberByPriceRange(searchTerms : string[], priceRanges : PriceRange[], brandParameters : string[]) : Observable<ProductsPerPriceRange>{
    let paramString = '';

    searchTerms.forEach((term, index) => {
      paramString =  paramString + this.searchParam + term;
    });

    if(brandParameters.length === 0){
      return from(priceRanges).pipe(mergeMap(range => <Observable<ProductsPerPriceRange>> this.http.get<ProductsPerPriceRange>(this.searchApi +  this.countPath + this.rangeParam + range.id + paramString)));
    }else{

      brandParameters.forEach((brand) => {
        paramString =  paramString + this.brandParam + brand;
      });

      return from(priceRanges).pipe(mergeMap(range => <Observable<ProductsPerPriceRange>> this.http.get<ProductsPerPriceRange>(this.searchApi + this.countPath + this.rangeParam + range.id + paramString)));
    }
    
  }
}
