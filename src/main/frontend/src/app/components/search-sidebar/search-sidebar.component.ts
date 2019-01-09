import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { PriceRange } from 'src/app/models/priceRange';
import { ProductsPerPriceRange } from 'src/app/models/productsPerPriceRange';
import { ProductsPerBrand } from 'src/app/models/productsPerBrand';
import { SearchService } from 'src/app/services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'search-sidebar',
  templateUrl: './search-sidebar.component.html',
  styleUrls: ['./search-sidebar.component.css']
})
export class SearchSidebarComponent implements OnInit, OnDestroy{

  @Input() searchTerms : string[];
  priceRanges : PriceRange[];
  numberOfProductsPerBrand: ProductsPerBrand[];
  numberOfProductsPerPriceRange: ProductsPerPriceRange[];
  selectedBrands : string[] = [];
  selectedPriceRanges : number[] = [];

  httpSubscription : Subscription;
  httpSubscription2 : Subscription;
  httpSubscription3 : Subscription;
  httpSubscription4 : Subscription;
  
  constructor(private searchService : SearchService) { }

  ngOnInit() {
    this.getPriceRanges();
    this.getBrands();
  }

  getBrands() : void{
    this.numberOfProductsPerBrand = [];
    this.searchService.getSearchBrands(this.searchTerms).toPromise()
                      .then(brands => console.log(brands))
                      .catch(error => console.log(error));
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


  onSelectedPriceRange() : void{

  }

  ngOnDestroy(){
    if(this.httpSubscription !== undefined) this.httpSubscription.unsubscribe();
    if(this.httpSubscription2 !== undefined) this.httpSubscription2.unsubscribe();
    if(this.httpSubscription3 !== undefined) this.httpSubscription3.unsubscribe();
    if(this.httpSubscription4 !== undefined) this.httpSubscription4.unsubscribe();
  }

}
