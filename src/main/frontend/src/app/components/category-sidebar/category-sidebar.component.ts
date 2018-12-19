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
  httpSubscription3 : Subscription;
  httpSubscription4 : Subscription;

  constructor(private categoryService : CategoryService, private router : Router) { }

  ngOnInit() {            
    
  }

  ngOnChanges(changes : SimpleChanges): void {
    this.updateSidebar();
  }

  updateSidebar() : void{
    this.selectedBrands = [];
    this.selectedPriceRanges = [];
    this.getPriceRanges();
    this.getBrands();
  }

  getBrands() : void{
    this.numberOfProductsPerBrand = [];
    this.categoryService.getCategoryBrands(this.category).toPromise()
                        .then(brands => {
                          this.categoryBrands = brands;
                           this.httpSubscription2 = this.categoryService.getCategoryProductsNumberByBrand(this.category, this.categoryBrands, this.selectedPriceRanges).subscribe(item => {
                            this.numberOfProductsPerBrand.push(item);
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

  updateBrands() : void{
    let numberOfProdsPerBrandArray :  ProductsPerBrand[] = [];
    this.httpSubscription4 = this.categoryService.getCategoryProductsNumberByBrand(this.category, this.categoryBrands, this.selectedPriceRanges)
                                                 .subscribe(item => {
                                                   item.checked = this.numberOfProductsPerBrand[this.numberOfProductsPerBrand.findIndex(x => x.brand === item.brand)].checked;
                                                  numberOfProdsPerBrandArray.push(item);
                                                  numberOfProdsPerBrandArray.sort((a: ProductsPerBrand, b: ProductsPerBrand) => {
                                                    const aIndex = this.categoryBrands.findIndex(brand => brand.name === a.brand);
                                                    const bIndex = this.categoryBrands.findIndex(brand => brand.name === b.brand);
                                                    return aIndex - bIndex;
                                                 });
                                                 if(numberOfProdsPerBrandArray.length === this.categoryBrands.length){
                                                  this.numberOfProductsPerBrand = numberOfProdsPerBrandArray;
                                                 }
                                                 },
                                                 error => {
                                                   console.log(error);
                                                 });
  }

  getPriceRanges() : void{
    this.initializePriceRanges();
    this.numberOfProductsPerPriceRange = [];
    this.httpSubscription =  this.categoryService.getCategoryProductsNumberByPriceRange(this.category, this.priceRanges, this.selectedBrands).subscribe(range => {
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

  updatePriceRanges() : void{
    this.initializePriceRanges();
    let numberOfProdsArray :  ProductsPerPriceRange[] = [];
    this.httpSubscription3 = this.categoryService.getCategoryProductsNumberByPriceRange(this.category, this.priceRanges, this.selectedBrands)
                        .subscribe(range => {
                          range.checked = this.numberOfProductsPerPriceRange[this.numberOfProductsPerPriceRange.findIndex(x => x.rangeId === range.rangeId)].checked;
                          numberOfProdsArray.push(range);
                          numberOfProdsArray.sort((a: ProductsPerPriceRange, b: ProductsPerPriceRange) => {
                            const aIndex = this.priceRanges.findIndex(priceRange => priceRange.id === a.rangeId);
                            const bIndex = this.priceRanges.findIndex(priceRange => priceRange.id === b.rangeId);
                            return aIndex - bIndex;
                          });
                          if(numberOfProdsArray.length === 4){
                            this.numberOfProductsPerPriceRange = numberOfProdsArray;
                          }
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

    this.router.navigate(['/category', this.category], {queryParams : { page : 0, fn : 'no', brand : this.selectedBrands, range : this.selectedPriceRanges}});
    this.updatePriceRanges();
  }

  onSelectedPriceRange() : void{
    this.selectedPriceRanges = this.numberOfProductsPerPriceRange
                             .filter(priceRangeOption => priceRangeOption.checked)
                             .map(priceRangeOption => priceRangeOption.rangeId);

    this.router.navigate(['/category', this.category], {queryParams : { page : 0, fn : 'no',  brand : this.selectedBrands, range : this.selectedPriceRanges}});
    this.updateBrands();
  }

  ngOnDestroy(){
    if(this.httpSubscription !== undefined) this.httpSubscription.unsubscribe();
    if(this.httpSubscription2 !== undefined) this.httpSubscription2.unsubscribe();
    if(this.httpSubscription3 !== undefined) this.httpSubscription3.unsubscribe();
    if(this.httpSubscription4 !== undefined) this.httpSubscription4.unsubscribe();
  }
}
