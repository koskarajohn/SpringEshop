import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ProductPage } from 'src/app/models/productPage';
import { Product } from 'src/app/models/product';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { SearchSidebarComponent } from '../search-sidebar/search-sidebar.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  @ViewChild(SearchSidebarComponent) sidebar : SearchSidebarComponent;
  currentPage : number = 0;
  products : Product[];
  productPage : ProductPage;
  pageNumbers : number[];
  isGetSearchProductsRequestDone : boolean = true;
  didSearchReturnAnyProducts : boolean = true;

  keywords : string[] = [];
  userSearchString : string = '';
  brandParameters = [] as string[];
  rangeParameters : string[] = [];

  productNumberLow : number ;
  productNumberHigh : number;

  queryParamRouteSubscription : Subscription;
  httpSubscription : Subscription;
  httpSubscription2 : Subscription;

  selectOptions = [
    {
      name : 'Αύξουσα Τιμή',
      value : 'asc'
    },
    {
      name : 'Φθίνουσα Τιμή',
      value : 'desc'
    }
  ];

  private selectedValue : string;

  constructor(private route : ActivatedRoute, private searchService : SearchService) { }

  ngOnInit() {
    this.selectedValue = 'asc';
    this.keywords.forEach(keyword => this.userSearchString = this.userSearchString + ' ' + keyword);
    this.queryParamRouteSubscription = this.route.queryParams.subscribe(queryParams => {
      this.isGetSearchProductsRequestDone = false;
      this.currentPage = queryParams['page'];
      this.brandParameters = queryParams['brand'];
      this.rangeParameters = queryParams['range'];
      this.keywords = queryParams['keyword'];
      let didSearchTermsChange = queryParams['fn'] === 'yes';

      if(didSearchTermsChange){
        this.userSearchString = '';
        this.keywords.forEach(keyword => this.userSearchString = this.userSearchString + ' ' + keyword);
        this.selectedValue = 'asc';
      }

          
      this.httpSubscription = this.searchService.getSearchProducts(this.keywords, this.currentPage, this.selectedValue, this.brandParameters, this.rangeParameters).subscribe(productPage => {
        if(productPage !== null){
          this.pageNumbers = [];
          this.productPage = productPage;
          this.products = productPage.content;
          this.setProductRange(this.productPage.number, this.productPage.numberOfElements);
          this.isGetSearchProductsRequestDone = true;
          this.didSearchReturnAnyProducts = true;
          this.initializePageNumberArray(this.pageNumbers, this.productPage.totalPages);
        }else{
          this.isGetSearchProductsRequestDone = true;
          this.didSearchReturnAnyProducts = false;
        }
        
      },
      error => {
        this.isGetSearchProductsRequestDone = true;
        this.didSearchReturnAnyProducts = false;
        console.log(error);
      });

    });
  }

  onOrderChange(order : any){
    this.isGetSearchProductsRequestDone = false;
    this.httpSubscription = this.searchService.getSearchProducts(this.keywords, this.currentPage, order, this.brandParameters, this.rangeParameters).subscribe(productPage => {
      this.productPage = productPage;
      this.products = productPage.content;
      this.isGetSearchProductsRequestDone = true;
      this.didSearchReturnAnyProducts = true;
    },
    error => {
      this.isGetSearchProductsRequestDone = true;
      this.didSearchReturnAnyProducts = false;
      console.log(error);
    });
  }

  initializePageNumberArray(pageNumbers : number[], pageCount : number) : void{
    for(let i=0; i<pageCount; i++){
      pageNumbers[i] = i + 1;
    }
  }

  setProductRange(pageNumber : number, pageNumberOfElements : number) : void{
    this.productNumberLow = pageNumber * 6 + 1;
    this.productNumberHigh = this.productNumberLow + pageNumberOfElements - 1;
  }

  ngOnDestroy(){
    this.queryParamRouteSubscription.unsubscribe();
    if(this.httpSubscription !== undefined)this.httpSubscription.unsubscribe();
    if(this.httpSubscription2 !== undefined) this.httpSubscription2.unsubscribe();
  }

}