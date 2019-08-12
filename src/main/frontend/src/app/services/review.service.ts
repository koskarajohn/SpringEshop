import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from '../models/review';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private reviewsEndpoint = '/api/reviews';

  constructor(private http : HttpClient) { }

  private createReview(review : Review) : Observable<any>{
    return this.http.post<Observable<any>>(this.reviewsEndpoint, review);
  }
}
