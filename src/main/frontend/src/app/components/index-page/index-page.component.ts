import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {

  popularProductCarouselTitle : string;
  newProductCarouselTitle : string;
  popularProductCarouselHtmlId : string;
  newProductCarouselHtmlId : string;

  constructor() { }

  ngOnInit() {
    this.popularProductCarouselTitle = 'Δημοφιλή Προιόντα';
    this.newProductCarouselTitle = 'Νέα Προιόντα';
    this.popularProductCarouselHtmlId = 'carousel-popular-products';
    this.newProductCarouselHtmlId = 'carousel-new-products';
  }

}
