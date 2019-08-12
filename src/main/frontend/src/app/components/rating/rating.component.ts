import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Star } from 'src/app/models/star';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  private stars : Star[] = [];
  private ratingTexts : string[] = ['Πολύ κακό', 'Κακό', 'Μέτριο', 'Καλό', 'Πολύ καλό'];
  private selectedRatingText : string = '';
  @Output() ratingEmitter : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.initializeStars();
  }

  initializeStars() : void{
    for(let i=0; i<5; i++){
      let star = {} as Star;
      star.id = i + 1;
      star.isChecked = false;
      star.text = this.ratingTexts[i];
      this.stars.push(star);
    }
  }

  isRatingSelected() : boolean{
    return this.selectedRatingText.length > 0;
  }

  onStarClick(star : Star) : void{
    this.selectedRatingText = this.ratingTexts[star.id - 1];
    this.addStars(star.id - 1);
    this.removeStars(star.id -1);
    this.ratingEmitter.emit(star.id);
  }

  addStars(endIndex : number) : void{
    for(let i=0; i<=endIndex; i++){
      this.stars[i].isChecked = true;
    }
  }

  removeStars(endIndex : number) : void{
    for(let i=endIndex + 1; i<this.stars.length; i++){
      this.stars[i].isChecked = false;
    }
  }
}
