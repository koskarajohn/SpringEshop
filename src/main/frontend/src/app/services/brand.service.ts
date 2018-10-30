import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Brand} from '../models/brand';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private brandsApi = '/api/brands';

  constructor(private http : HttpClient) { }

  getBrands() : Observable<Brand[]>{
    return this.http.get<Brand[]>(this.brandsApi);
  }
}
