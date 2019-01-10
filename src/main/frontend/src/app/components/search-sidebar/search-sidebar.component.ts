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
  
  constructor(private searchService : SearchService, private router : Router) { }

  ngOnInit() {
    this.getPriceRanges();
    this.getBrands();
  }

  ngOnChanges(changes : SimpleChanges): void {
    
  }

  getBrands() : void{
    this.numberOfProductsPerBrand = [];
    this.searchService.getSearchBrands(this.searchTerms).toPromise()
                      .then(brands => {
                        this.searchBrands = brands;
                        this.httpSubscription2 = this.searchService.getSearchProductsNumberByBrand(this.searchTerms, this.searchBrands, this.selectedPriceRanges).subscribe(item => {
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
  
  updatePriceRanges() : void{
    this.initializePriceRanges();
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

    this.router.navigate(['/search'], {queryParams : { keyword : this.searchTerms, brand : this.selectedBrands, range : this.selectedPriceRanges, page : 0}});
    this.updatePriceRanges();
  }

  onSelectedPriceRange() : void{
    this.selectedPriceRanges = this.numberOfProductsPerPriceRange
                             .filter(priceRangeOption => priceRangeOption.checked)
                             .map(priceRangeOption => priceRangeOption.rangeId);

    this.router.navigate(['/search'], {queryParams : { keyword : this.searchTerms, brand : this.selectedBrands, range : this.selectedPriceRanges, page : 0}});                       
    this.updateBrands();
  }

  ngOnDestroy(){
    if(this.httpSubscription !== undefined) this.httpSubscription.unsubscribe();
    if(this.httpSubscription2 !== undefined) this.httpSubscription2.unsubscribe();
    if(this.httpSubscription3 !== undefined) this.httpSubscription3.unsubscribe();
    if(this.httpSubscription4 !== undefined) this.httpSubscription4.unsubscribe();
  }

}
