import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../models/review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private reviewsEndpoint = '/api/reviews';
  private productIdParam = '?productid=';

  constructor(private http : HttpClient) { }

  public createReview(review : Review) : Observable<any>{
    return this.http.post<any>(this.reviewsEndpoint, review);
  }

  public getReviews(productId : number) : Observable<Review[]>{
    return this.http.get<Review[]>(this.reviewsEndpoint + this.productIdParam + productId);
  }
}
