import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/review.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  private review = {} as Review;

  constructor(private reviewService : ReviewService, private authenticationService : AuthenticationService) { }

  ngOnInit() {
  }

  onSubmit() : void{
    
  }
}
