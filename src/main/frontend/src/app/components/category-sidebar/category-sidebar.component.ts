import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Subscription } from 'rxjs';
import { Rating } from 'src/app/models/rating';
import { PriceRange } from 'src/app/models/priceRange';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsPerBrand } from 'src/app/models/productsPerBrand';
import { ProductsPerPriceRange } from 'src/app/models/productsPerPriceRange';

@Component({
  selector: 'category-sidebar',
  templateUrl: './category-sidebar.component.html',
  styleUrls: ['./category-sidebar.component.css']
})
export class CategorySidebarComponent implements OnInit, OnDestroy, OnChanges {
  

  @Input() category : string;
  categoryBrands : Brand[];
  numberOfProductsPerBrand: ProductsPerBrand[];
  numberOfProductsPerPriceRange: ProductsPerPriceRange[];
  priceRanges : PriceRange[];
  ratings : Rating[];

  constructor(private categoryService : CategoryService) { }

  ngOnInit() {                            
    this.initializeRatings();
  }

  ngOnDestroy(){
    
  }

  ngOnChanges(changes : SimpleChanges): void {
    this.getBrands();
    this.getPriceRanges(); 
  }

  getBrands() : void{
    this.numberOfProductsPerBrand = [];
    this.categoryService.getCategoryBrands(this.category).subscribe(brands => {
      this.categoryBrands = brands;
      this.categoryService.getCategoryProductsNumberByBrand(this.category, this.categoryBrands).subscribe(item => {
        this.numberOfProductsPerBrand.push(item);
        //this.numberOfProductsPerBrand.sort(function(a,b) {return (a.brand > b.brand) ? 1 : ( (b.brand > a.brand) ? 1 : 0);});
      });
    });
  }

  getPriceRanges() : void{
    this.initializePriceRanges();
    this.numberOfProductsPerPriceRange = [];
    this.categoryService.getCategoryProductsNumberByPriceRange(this.category, this.priceRanges).subscribe(range => {
      this.numberOfProductsPerPriceRange.push(range);
      this.numberOfProductsPerPriceRange.sort(function(a,b) {return (a.min > b.min) ? 1 : ( (b.min > a.min) ? 1 : 0);});
    });
  }

  initializeRatings() : void{
    this.ratings = [];
    for(let i=0; i<5; i++){
      let rating = {} as Rating;
      rating.uncheckedStars = i;
      this.ratings.push(rating);
    }
  }

  initializePriceRanges() : void{
    this.priceRanges = [];
    let zeroToTen= {} as PriceRange;
    let tenToTwenty= {} as PriceRange;
    let TwentyToThirty= {} as PriceRange;
    let ThirtyToFifty= {} as PriceRange;
    zeroToTen.min = 0;
    zeroToTen.max = 10;
    tenToTwenty.min = 10;
    tenToTwenty.max = 20;
    TwentyToThirty.min = 20;
    TwentyToThirty.max = 30;
    ThirtyToFifty.min = 30;
    ThirtyToFifty.max = 50;
    this.priceRanges.push(zeroToTen);
    this.priceRanges.push(tenToTwenty);
    this.priceRanges.push(TwentyToThirty);
    this.priceRanges.push(ThirtyToFifty);
  }

}
