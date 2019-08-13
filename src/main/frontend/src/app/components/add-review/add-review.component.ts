import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Review } from 'src/app/models/review';
import { isNumber } from 'util';
import { User } from 'src/app/models/user';
import { Product } from 'src/app/models/product';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit, OnDestroy {

  private productName = '';
  private review = {} as Review;
  private wasSubmitButtonClicked : boolean = false;
  private isAuthenticated : boolean;
  private wasReviewCreated : boolean = false;
  private paramSubscription : Subscription;

  constructor(private reviewService : ReviewService, private authenticationService : AuthenticationService, private route : ActivatedRoute) { }

  ngOnInit() {
      this.isAuthenticated = this.authenticationService.isAuthenticated;
      
      if(this.isAuthenticated){
        this.paramSubscription = this.route.params.subscribe(params => {
          this.productName = params['name'];
          this.review.product = {} as Product;
          this.review.product.name = this.productName;
        });

        this.review.user = {} as User;
        
        this.review.user.username =  localStorage.getItem('user');
        this.review.user.id = Number(localStorage.getItem('userid')); 
      }
  }

  onSubmit() : void{
    this.wasSubmitButtonClicked = true;
    if(this.isRatingSelected()){
      this.reviewService.createReview(this.review).toPromise().then(response => this.wasReviewCreated = true)
                                                              .catch(error => {
                                                                console.log(error);
                                                                this.wasReviewCreated = false;
                                                              });
    }
  }

  getRating(rating : any) : void{
    if(isNumber(rating)){
      this.review.rating = rating;
    }
  }

  isRatingSelected() : boolean{
    return this.review.rating !== undefined;
  }

  ngOnDestroy(): void {
    if(this.paramSubscription !== undefined) this.paramSubscription.unsubscribe();
  }
}
