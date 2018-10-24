import { Component, OnInit } from '@angular/core';
import {Deal} from '../../models/deal';
import {DealService } from 'src/app/services/deal.service';

@Component({
  selector: 'discount-carousel',
  templateUrl: './discount-carousel.component.html',
  styleUrls: ['./discount-carousel.component.css']
})
export class DiscountCarouselComponent implements OnInit {

  deals : Deal[];

  constructor(private dealService : DealService) { }

  ngOnInit() {
    this.dealService.getDeals()
        .subscribe(deals => this.deals = deals);
  }

}
