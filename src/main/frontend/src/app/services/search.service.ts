import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductPage } from '../models/productPage';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  private searchApi = '/api/search';
  private pageParam = "?page=";
  private searchParam = "&keyword=";
  constructor(private http : HttpClient) { }

  getSearchProducts(searchParameters : string[], page : number) : Observable<ProductPage>{
    let paramString = this.pageParam + page;
    searchParameters.forEach(keyword => paramString = paramString + this.searchParam + keyword);
    return this.http.get<ProductPage>(this.searchApi + paramString);
  }
}
