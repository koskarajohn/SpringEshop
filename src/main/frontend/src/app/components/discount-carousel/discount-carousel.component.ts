import { Component, OnInit, OnDestroy } from '@angular/core';
import {Deal} from '../../models/deal';
import {DealService } from 'src/app/services/deal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'discount-carousel',
  templateUrl: './discount-carousel.component.html',
  styleUrls: ['./discount-carousel.component.css']
})
export class DiscountCarouselComponent implements OnInit, OnDestroy {
  
  deals : Deal[];
  httpSubscription : Subscription;

  constructor(private dealService : DealService) { }

  ngOnInit() {
    this.httpSubscription = this.dealService.getDeals()
        .subscribe(deals => this.deals = deals
        ,error => console.log(error));
  }

  ngOnDestroy(){
    if(this.httpSubscription !== undefined) this.httpSubscription.unsubscribe();
  }

}
