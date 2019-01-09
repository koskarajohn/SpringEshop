import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductPage } from 'src/app/models/productPage';
import { Product } from 'src/app/models/product';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  currentPage : number = 0;
  products : Product[];
  productPage : ProductPage;
  pageNumbers : number[];
  isGetSearchProductsRequestDone : boolean = true;

  keywords : string[] = [];
  userSearchString : string = '';

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
    this.queryParamRouteSubscription = this.route.queryParams.subscribe(queryParams => {
      this.isGetSearchProductsRequestDone = false;
      this.currentPage = queryParams['page'];
      this.keywords = queryParams['keyword'];
      this.keywords.forEach(keyword => this.userSearchString = this.userSearchString + ' ' + keyword);
      this.selectedValue = 'asc';

      this.httpSubscription = this.searchService.getSearchProducts(this.keywords, this.currentPage).subscribe(productPage => {
        this.pageNumbers = [];
        this.productPage = productPage;
        this.products = productPage.content;
        this.setProductRange(this.productPage.number, this.productPage.numberOfElements);
        this.isGetSearchProductsRequestDone = true;
        this.initializePageNumberArray(this.pageNumbers, this.productPage.totalPages);
      },
      error => {
        this.isGetSearchProductsRequestDone = true;
        console.log(error);
      })

    });
  }

  onOrderChange(order : any){
    
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
    // /if(this.httpSubscription2 !== undefined) this.httpSubscription2.unsubscribe();
  }

}
