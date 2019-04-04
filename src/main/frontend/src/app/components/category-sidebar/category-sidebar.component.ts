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
  httpSubscription5 : Subscription;
  httpSubscription6 : Subscription;
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

  updateSidebarWithoutRefresh(brands : string[], ranges : string[]){

    let previouslySelectedBrands = this.numberOfProductsPerBrand
                             .filter(brandOption => brandOption.checked)
                             .map(brandOption => brandOption.brand);                      
    
    let previouslySelectedPriceRanges = this.numberOfProductsPerPriceRange
                             .filter(priceRangeOption => priceRangeOption.checked)
                             .map(priceRangeOption => priceRangeOption.rangeId.toString());
    
    if(brands.length === 0){
      this.numberOfProductsPerBrand.forEach(brandOption => brandOption.checked = false);
      this.updatePriceRangesBackButton(brands);
    }else if(previouslySelectedBrands.length < brands.length ){
      let addedBrand = this.getAddedElement(previouslySelectedBrands, brands);
      this.numberOfProductsPerBrand[this.numberOfProductsPerBrand.findIndex(brandOption => brandOption.brand === addedBrand)].checked = true;
      this.updatePriceRangesBackButton(brands);
    }else if(previouslySelectedBrands.length > brands.length ){
      let removedBrand = this.getRemovedElement(previouslySelectedBrands, brands);
      this.numberOfProductsPerBrand[this.numberOfProductsPerBrand.findIndex(brandOption => brandOption.brand === removedBrand)].checked = false;
      this.updatePriceRangesBackButton(brands);
    }

    if(ranges.length === 0){
      this.numberOfProductsPerPriceRange.forEach(rangeOption => rangeOption.checked = false);
      this.updateBrandsBackButton(ranges.map(range => Number(range)));
    }else if(previouslySelectedPriceRanges.length < ranges.length){
      let addedRange = this.getAddedElement(previouslySelectedPriceRanges, ranges);
      this.numberOfProductsPerPriceRange[this.numberOfProductsPerPriceRange.findIndex(rangeOption => rangeOption.rangeId.toString() === addedRange)].checked = true;
      this.updateBrandsBackButton(ranges.map(range => Number(range)));
    }else if(previouslySelectedPriceRanges.length > ranges.length){
      let removedRange = this.getRemovedElement(previouslySelectedPriceRanges, ranges);
      this.numberOfProductsPerPriceRange[this.numberOfProductsPerPriceRange.findIndex(rangeOption => rangeOption.rangeId.toString() === removedRange)].checked = false;
      this.updateBrandsBackButton(ranges.map(range => Number(range)));
    }
  }

  getRemovedElement(array1 : string[], array2 : string[]) : string{
     let removedElement = '';
      array1.forEach(element => {
        if(!array2.includes(element))
            removedElement =  element;
      });
    return removedElement;
  }

  getAddedElement(array1 : string[], array2 : string[]) : string{
      let addedElement = '';
      array2.forEach(element => {
        if(!array1.includes(element))
          addedElement =  element;
      });
      return addedElement;
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

  updateBrandsBackButton(selectedPriceRanges : number[]) : void{
    let numberOfProdsPerBrandArray :  ProductsPerBrand[] = [];
    this.httpSubscription6 = this.categoryService.getCategoryProductsNumberByBrand(this.category, this.categoryBrands, selectedPriceRanges)
                                                 .subscribe(item => {
                                                  numberOfProdsPerBrandArray.push(item);
                                                 if(numberOfProdsPerBrandArray.length === this.categoryBrands.length){
                                                  numberOfProdsPerBrandArray.forEach(prodPerBrand => {
                                                    this.numberOfProductsPerBrand[this.numberOfProductsPerBrand.findIndex(brand => brand.brand === prodPerBrand.brand)].number = prodPerBrand.number;
                                                  });
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

  updatePriceRangesBackButton(selectedBrands : string[]) : void{
    this.initializePriceRanges();
    let numberOfProdsArray :  ProductsPerPriceRange[] = [];
    this.httpSubscription5 = this.categoryService.getCategoryProductsNumberByPriceRange(this.category, this.priceRanges, selectedBrands)
                        .subscribe(range => {
                          numberOfProdsArray.push(range);
                          if(numberOfProdsArray.length === 4){
                            numberOfProdsArray.forEach(prodPerPriceRange => {
                              this.numberOfProductsPerPriceRange[this.numberOfProductsPerPriceRange.findIndex(range => range.rangeId === prodPerPriceRange.rangeId)].number = prodPerPriceRange.number;
                              });
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
    if(this.httpSubscription5 !== undefined) this.httpSubscription3.unsubscribe();
    if(this.httpSubscription6 !== undefined) this.httpSubscription4.unsubscribe();
  }
}
