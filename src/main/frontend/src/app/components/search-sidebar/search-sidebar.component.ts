import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PriceRange } from 'src/app/models/priceRange';
import { ProductsPerPriceRange } from 'src/app/models/productsPerPriceRange';
import { ProductsPerBrand } from 'src/app/models/productsPerBrand';
import { SearchService } from 'src/app/services/search.service';
import { Subscription } from 'rxjs';
import { Brand } from 'src/app/models/brand';
import { Router } from '@angular/router';

@Component({
  selector: 'search-sidebar',
  templateUrl: './search-sidebar.component.html',
  styleUrls: ['./search-sidebar.component.css']
})
export class SearchSidebarComponent implements OnInit, OnDestroy, OnChanges{

  @Input() searchTerms : string[];
  @Input() brandParameters : string[];
  @Input() rangeParameters : string[];

  searchBrands : Brand[];
  priceRanges : PriceRange[];
  numberOfProductsPerBrand: ProductsPerBrand[];
  numberOfProductsPerPriceRange: ProductsPerPriceRange[];

  selectedBrands : string[] = [];
  selectedPriceRanges : number[] = [];

  httpSubscription : Subscription;
  httpSubscription2 : Subscription;
  httpSubscription3 : Subscription;
  httpSubscription4 : Subscription;
  httpSubscription5 : Subscription;
  httpSubscription6 : Subscription;
  
  constructor(private searchService : SearchService, private router : Router) { }

  ngOnInit() {

  }

  ngOnChanges(changes : SimpleChanges): void {
    this.brandParameters = changes['brandParameters'] == null ? [] : changes['brandParameters'].currentValue;
    this.rangeParameters = changes['rangeParameters'] == null ? [] : changes['rangeParameters'].currentValue;
    if(this.didSearchTermsChange(changes.searchTerms.previousValue, changes.searchTerms.currentValue)){
      if(this.brandParameters.length > 0 || this.rangeParameters.length > 0){
        this.selectedBrands = this.brandParameters;
        this.selectedPriceRanges = this.rangeParameters.map(range => Number(range));
      }else{
        this.selectedBrands = [];
        this.selectedPriceRanges = [];
      }
      this.updateSidebar();
    }
  }

  didSearchTermsChange(oldSearchTerms : string[], newSearchTerms : string[]) : boolean{
    let didTheyChange = false;

    if(oldSearchTerms === undefined) return true;
    if(oldSearchTerms.length !== newSearchTerms.length) return true;

    for(let i=0; i < oldSearchTerms.length; i++){
      if(oldSearchTerms[i] !== newSearchTerms[i]){
        didTheyChange = true;
        break;
      }
    }

    return didTheyChange;
  }

  updateSidebar() : void{
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
    this.searchService.getSearchBrands(this.searchTerms).toPromise()
                      .then(brands => {
                        if(brands !== null){
                          this.searchBrands = brands;
                          this.httpSubscription2 = this.searchService.getSearchProductsNumberByBrand(this.searchTerms, this.searchBrands, this.selectedPriceRanges).subscribe(item => {
                          this.numberOfProductsPerBrand.push(item);
                          this.numberOfProductsPerBrand.sort((a: ProductsPerBrand, b: ProductsPerBrand) => {
                            const aIndex = brands.findIndex(brand => brand.name === a.brand);
                            const bIndex = brands.findIndex(brand => brand.name === b.brand);
                            return aIndex - bIndex;
                          });
                          if(this.numberOfProductsPerBrand.length === this.searchBrands.length && this.selectedBrands.length > 0){
                            this.selectedBrands.forEach(selectedBrand => {
                              this.numberOfProductsPerBrand[this.numberOfProductsPerBrand.findIndex(brand => brand.brand === selectedBrand)].checked = true;
                            });
                          }
                        }, 
                        error => {
                          console.log(error);
                        });
                        }
                      })
                      .catch(error => console.log(error));
  }

  updateBrands() : void{
    let numberOfProdsPerBrandArray :  ProductsPerBrand[] = [];
    this.httpSubscription3 = this.searchService.getSearchProductsNumberByBrand(this.searchTerms, this.searchBrands, this.selectedPriceRanges)
                                                 .subscribe(item => {
                                                   item.checked = this.numberOfProductsPerBrand[this.numberOfProductsPerBrand.findIndex(x => x.brand === item.brand)].checked;
                                                  numberOfProdsPerBrandArray.push(item);
                                                  numberOfProdsPerBrandArray.sort((a: ProductsPerBrand, b: ProductsPerBrand) => {
                                                    const aIndex = this.searchBrands.findIndex(brand => brand.name === a.brand);
                                                    const bIndex = this.searchBrands.findIndex(brand => brand.name === b.brand);
                                                    return aIndex - bIndex;
                                                 });
                                                 if(numberOfProdsPerBrandArray.length === this.searchBrands.length){
                                                  this.numberOfProductsPerBrand = numberOfProdsPerBrandArray;
                                                 }
                                                 },
                                                 error => {
                                                   console.log(error);
                                                 });
  }

  updateBrandsBackButton(selectedPriceRanges : number[]) : void{
    let numberOfProdsPerBrandArray :  ProductsPerBrand[] = [];
    this.httpSubscription6 = this.searchService.getSearchProductsNumberByBrand(this.searchTerms, this.searchBrands, selectedPriceRanges)
                                                 .subscribe(item => {
                                                  numberOfProdsPerBrandArray.push(item);
                                                 if(numberOfProdsPerBrandArray.length === this.searchBrands.length){
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
    this.httpSubscription =  this.searchService.getSearchProductsNumberByPriceRange(this.searchTerms, this.priceRanges, this.selectedBrands).subscribe(range => {
      this.numberOfProductsPerPriceRange.push(range);
      this.numberOfProductsPerPriceRange.sort((a: ProductsPerPriceRange, b: ProductsPerPriceRange) => {
        const aIndex = this.priceRanges.findIndex(priceRange => priceRange.id === a.rangeId);
        const bIndex = this.priceRanges.findIndex(priceRange => priceRange.id === b.rangeId);
        return aIndex - bIndex;
      });
      if(this.numberOfProductsPerPriceRange.length === 4 && this.selectedPriceRanges.length > 0){
        this.selectedPriceRanges.forEach(selectedRange => {
          this.numberOfProductsPerPriceRange[this.numberOfProductsPerPriceRange.findIndex(range => range.rangeId === selectedRange)].checked = true;
        });
      }
    },
    error => {
      console.log(error);
    });
  }
  
  updatePriceRanges() : void{
    let numberOfProdsArray :  ProductsPerPriceRange[] = [];
    this.httpSubscription4 = this.searchService.getSearchProductsNumberByPriceRange(this.searchTerms, this.priceRanges, this.selectedBrands)
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
    this.httpSubscription5 = this.searchService.getSearchProductsNumberByPriceRange(this.searchTerms, this.priceRanges, selectedBrands)
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

    this.router.navigate(['/search'], {queryParams : { keyword : this.searchTerms, brand : this.selectedBrands, range : this.selectedPriceRanges, fn : 'no', page : 0}});
    this.updatePriceRanges();
  }

  onSelectedPriceRange() : void{
    this.selectedPriceRanges = this.numberOfProductsPerPriceRange
                             .filter(priceRangeOption => priceRangeOption.checked)
                             .map(priceRangeOption => priceRangeOption.rangeId);

    this.router.navigate(['/search'], {queryParams : { keyword : this.searchTerms, brand : this.selectedBrands, range : this.selectedPriceRanges, fn : 'no', page : 0}});                       
    this.updateBrands();
  }

  ngOnDestroy(){
    if(this.httpSubscription !== undefined) this.httpSubscription.unsubscribe();
    if(this.httpSubscription2 !== undefined) this.httpSubscription2.unsubscribe();
    if(this.httpSubscription3 !== undefined) this.httpSubscription3.unsubscribe();
    if(this.httpSubscription4 !== undefined) this.httpSubscription4.unsubscribe();
    if(this.httpSubscription5 !== undefined) this.httpSubscription5.unsubscribe();
    if(this.httpSubscription6 !== undefined) this.httpSubscription6.unsubscribe();
  }

}
