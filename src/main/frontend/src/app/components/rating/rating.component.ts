import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  totalStars : number;
  checkedStars : number;
  @Input() uncheckedStars : number;
  areThereUncheckedstars : boolean;

  constructor() { }

  ngOnInit() {
    this.totalStars = 5;
    this.checkedStars = this.totalStars - this.uncheckedStars
    this.areThereUncheckedstars = this.uncheckedStars > 0 ;
  }

  counter( i : number){
    return new Array(i);
  } 

}
