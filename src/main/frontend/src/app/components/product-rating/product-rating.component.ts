import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.css']
})
export class ProductRatingComponent implements OnInit {

  @Input() rating : number;
  private width : number;
  private areThereAnyRatings : boolean;

  constructor() { }

  ngOnInit() {
    this.areThereAnyRatings = this.rating >= 1;
    this.width = this.areThereAnyRatings ? this.rating / 5 : 0 ;
  }

  getArray(){
    return new Array(5);
  }

}
