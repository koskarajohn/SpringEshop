import { Component, OnInit, OnDestroy } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Subscription } from 'rxjs';
import { BrandService } from 'src/app/services/brand.service';
import { Rating } from 'src/app/models/rating';

@Component({
  selector: 'category-sidebar',
  templateUrl: './category-sidebar.component.html',
  styleUrls: ['./category-sidebar.component.css']
})
export class CategorySidebarComponent implements OnInit, OnDestroy {

  brands : Brand[];
  ratings : Rating[];
  httpSubscription : Subscription;

  constructor(private brandService : BrandService) { }

  ngOnInit() {
    this.httpSubscription =  this.brandService.getBrands()
                                 .subscribe(brands => this.brands = brands);  
    this.initializeRatings();
  }

  ngOnDestroy(){
    this.httpSubscription.unsubscribe();
  }

  initializeRatings() : void{
    this.ratings = [];
    for(let i=0; i<5; i++){
      let rating = {} as Rating;
      rating.uncheckedStars = i;
      this.ratings.push(rating);
    }
  }

}
