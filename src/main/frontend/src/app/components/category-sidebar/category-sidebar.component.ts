import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Rating } from 'src/app/models/rating';
import { PriceRange } from 'src/app/models/priceRange';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsPerBrand } from 'src/app/models/productsPerBrand';
import { ProductsPerPriceRange } from 'src/app/models/productsPerPriceRange';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

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
  selectedBrands : string[] = [];
  selectedPriceRanges : number[] = [];

  httpSubscription : Subscription;
  httpSubscription2 : Subscription;

  constructor(private categoryService : CategoryService, private router : Router) { }

  ngOnInit() {                            
    this.initializeRatings();
  }

  ngOnChanges(changes : SimpleChanges): void {
    this.getBrands();
    this.getPriceRanges(); 
    this.selectedBrands = [];
    this.selectedPriceRanges = [];
  }

  deselectCheckboxes() : void{
    this.numberOfProductsPerBrand.forEach(brandOption => brandOption.checked = false);
    this.numberOfProductsPerPriceRange.forEach(priceRangeOption => priceRangeOption.checked = false);
  }

  getBrands() : void{
    this.numberOfProductsPerBrand = [];

    this.categoryService.getCategoryBrands(this.category).toPromise()
                        .then(brands => {
                          this.categoryBrands = brands;
                           this.httpSubscription2 = this.categoryService.getCategoryProductsNumberByBrand(this.category, this.categoryBrands).subscribe(item => {
                            this.numberOfProductsPerBrand.push(item);
                            //this.numberOfProductsPerBrand.sort(function(a,b) {return (a.brand > b.brand) ? 1 : ( (b.brand > a.brand) ? 1 : 0);});
                            this.numberOfProductsPerBrand.sort((a: ProductsPerBrand, b: ProductsPerBrand) => {
                              const aIndex = brands.findIndex(brand => brand.name === a.brand);
                              const bIndex = brands.findIndex(brand => brand.name === b.brand);
                              return aIndex - bIndex;
                           });
                          }, 
                          error => {
                            console.log(error);
                          });

                        })
                        .catch(error => console.log(error));

  }

  getPriceRanges() : void{
    this.initializePriceRanges();
    this.numberOfProductsPerPriceRange = [];
    this.httpSubscription =  this.categoryService.getCategoryProductsNumberByPriceRange(this.category, this.priceRanges).subscribe(range => {
      this.numberOfProductsPerPriceRange.push(range);
      this.numberOfProductsPerPriceRange.sort((a: ProductsPerPriceRange, b: ProductsPerPriceRange) => {
        const aIndex = this.priceRanges.findIndex(priceRange => priceRange.id === a.rangeId);
        const bIndex = this.priceRanges.findIndex(priceRange => priceRange.id === b.rangeId);
        return aIndex - bIndex;
     });
    },
    error => {
      console.log(error);
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
    zeroToTen.id = 1;
    tenToTwenty.id = 2 ;
    TwentyToThirty.id = 3;
    ThirtyToFifty.id = 4;
    this.priceRanges.push(zeroToTen);
    this.priceRanges.push(tenToTwenty);
    this.priceRanges.push(TwentyToThirty);
    this.priceRanges.push(ThirtyToFifty);
    this.priceRanges.sort( (a : PriceRange, b : PriceRange ) => a.id - b.id);
  }

  onSelectedBrand() : void{
    this.selectedBrands = this.numberOfProductsPerBrand
                             .filter(brandOption => brandOption.checked)
                             .map(brandOption => brandOption.brand);

    this.router.navigate(['/category', this.category], {queryParams : { page : 0, brand : this.selectedBrands, range : this.selectedPriceRanges}});
  }

  onSelectedPriceRange() : void{
    this.selectedPriceRanges = this.numberOfProductsPerPriceRange
                             .filter(priceRangeOption => priceRangeOption.checked)
                             .map(priceRangeOption => priceRangeOption.rangeId);

    this.router.navigate(['/category', this.category], {queryParams : { page : 0, brand : this.selectedBrands, range : this.selectedPriceRanges}});
  }

  ngOnDestroy(){
    if(this.httpSubscription !== undefined) this.httpSubscription.unsubscribe();
    if(this.httpSubscription2 !== undefined) this.httpSubscription2.unsubscribe();
  }
}
