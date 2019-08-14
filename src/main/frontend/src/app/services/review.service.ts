import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../models/review';
import { Observable } from 'rxjs';
import { ProductRating } from '../models/productRating';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private reviewsEndpoint = '/api/reviews';
  private productIdParam = '?productid=';
  private ratingParam = '&query=rating';

  constructor(private http : HttpClient) { }

  public createReview(review : Review) : Observable<any>{
    return this.http.post<any>(this.reviewsEndpoint, review);
  }

  public getReviews(productId : number) : Observable<Review[]>{
    return this.http.get<Review[]>(this.reviewsEndpoint + this.productIdParam + productId);
  }

  public getProductAverageRating(productId : number) : Observable<ProductRating>{
    return this.http.get<ProductRating>(this.reviewsEndpoint + this.productIdParam + productId + this.ratingParam);
  }
}
