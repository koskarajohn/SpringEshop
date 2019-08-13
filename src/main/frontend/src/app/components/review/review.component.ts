import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  @Input() review : Review;

  constructor() { }

  ngOnInit() {
  }

  getArray(){
    return new Array(this.review.rating);
  }

}
