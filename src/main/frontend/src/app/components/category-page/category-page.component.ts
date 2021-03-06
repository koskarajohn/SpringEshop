import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Event as NavigationEvent, NavigationStart } from "@angular/router";
import { filter } from "rxjs/operators";
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { Product } from 'src/app/models/product';
import { ProductPage } from 'src/app/models/productPage';
import { CategorySidebarComponent } from '../category-sidebar/category-sidebar.component';

@Component({
  selector: 'category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit, OnDestroy {

  @ViewChild(CategorySidebarComponent) sidebar : CategorySidebarComponent;
  category : string;
  categoryTitle : string;
  currentPage : number = 0;
  products : Product[];
  productPage : ProductPage;
  pageNumbers : number[];
  brandParameters = [] as string[];
  rangeParameters : string[] = [];
  brandParametersForSidebar = [] as string[];
  rangeParametersForSidebar = [] as string[];
  isGetCategoryProductsRequestDone : boolean = true;
  isClickFromNavigationBar : boolean = false;
  wasBackButtonClicked : boolean = false;

  productNumberLow : number ;
  productNumberHigh : number;

  paramRouteSubscription : Subscription;
  queryParamRouteSubscription : Subscription;
  httpSubscription : Subscription;
  httpSubscription2 : Subscription;
  routerEventSubscription : Subscription;

  greekCategories = {
    vitamins : 'Βιταμίνες',
    minerals : 'Μέταλλα',
    fishoils : 'Ιχθυέλαια',
    superfoods : 'Υπερτροφές',
    fragrances : 'Αρώματα',
    shampoos : 'Σαμπουάν'
  };

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

  constructor(private route : ActivatedRoute, private categoryService : CategoryService, private router : Router) { }

  ngOnInit() {
    this.paramRouteSubscription = this.route.params.subscribe(params => {
      this.isGetCategoryProductsRequestDone = false;
      this.getBrandParametersValue(this.route.snapshot.queryParams);
      this.getRangeParametersValue(this.route.snapshot.queryParams);
      this.selectedValue = 'asc';
      this.category = params['name'];
      this.currentPage =  this.route.snapshot.queryParams['page'];
      this.categoryTitle = params['name'] === 'fish-oils' ? this.greekCategories['fishoils'] : this.greekCategories[params['name']];
      if(!(this.brandParameters.length === 0 && this.rangeParameters.length === 0)){
        this.brandParametersForSidebar = this.brandParameters;
        this.rangeParametersForSidebar = this.rangeParameters;
      }
         
      this.httpSubscription = this.categoryService.getCategoryProductsPage(this.category, this.currentPage, this.selectedValue, this.brandParameters, this.rangeParameters).subscribe(productPage => {
        this.pageNumbers = [];
        this.productPage = productPage;
        this.products = productPage.content;
        this.setProductRange(this.productPage.number, this.productPage.numberOfElements);
        this.isGetCategoryProductsRequestDone = true;  
        this.initializePageNumberArray(this.pageNumbers, this.productPage.totalPages);
      }, 
      error => {
        console.log(error);
        this.isGetCategoryProductsRequestDone = true;
      });
    });

    this.routerEventSubscription = this.router.events
                                                .pipe(filter(event => event instanceof NavigationStart))
                                                .subscribe( ( event: NavigationStart ) => {
                                                       console.log( "route:", event.url );
                                                       if(event.navigationTrigger === 'popstate'){
                                                         this.wasBackButtonClicked = true;
                                                       }
                                                 });

    this.queryParamRouteSubscription =  this.route.queryParams.subscribe(queryParams => {
      this.isGetCategoryProductsRequestDone = false;
      let oldCategory = this.category;
      let oldPage = this.currentPage;
      let isClickFromNavigationBarParam = queryParams['fn'] === 'yes';
      this.currentPage = queryParams['page'];

      let oldBrandParametersLength = this.brandParameters.length;

      this.getBrandParametersValue(queryParams);
      let newBrandParametersLength = this.brandParameters.length;
      let didBrandParametersChange = oldBrandParametersLength !== newBrandParametersLength  ? true : false;
      

      let oldRangeParametersLength = this.rangeParameters.length;
      
      this.getRangeParametersValue(queryParams);
      let newRangeParametersLength = this.rangeParameters.length;
      let didRangeParametersChange = oldRangeParametersLength !== newRangeParametersLength  ? true : false;

      this.category = this.route.snapshot.params['name'];
      this.categoryTitle = this.category === 'fish-oils' ? this.greekCategories['fishoils'] : this.greekCategories[this.category];

      if(this.wasBackButtonClicked && oldCategory === this.category && (this.brandParameters.length !== 0 || this.rangeParameters.length !== 0)){
        this.sidebar.updateSidebarWithoutRefresh(this.brandParameters, this.rangeParameters);
        this.wasBackButtonClicked = false;
      } 
      
      if( oldCategory === this.category && (this.currentPage != oldPage || didBrandParametersChange || didRangeParametersChange) ){
        if(isClickFromNavigationBarParam && (didBrandParametersChange || didRangeParametersChange) && (this.brandParameters.length === 0 && this.rangeParameters.length === 0)){
          this.brandParametersForSidebar = this.brandParameters;
          this.rangeParametersForSidebar = this.rangeParameters;
        }

        this.httpSubscription2 = this.categoryService.getCategoryProductsPage(this.category, this.currentPage, this.selectedValue, this.brandParameters, this.rangeParameters).subscribe(productPage => {
          this.pageNumbers = [];
          this.productPage = productPage;
          this.products = productPage.content; 
          this.setProductRange(this.productPage.number, this.productPage.numberOfElements);
          this.isGetCategoryProductsRequestDone = true;
          this.initializePageNumberArray(this.pageNumbers, this.productPage.totalPages);
        },
        error => {
          console.log(error);
          this.isGetCategoryProductsRequestDone = true;
        });
      }
    });
  }

  getBrandParametersValue(queryParams : Params) : void{
    this.brandParameters = queryParams['brand'] == null ? [] : queryParams['brand'];
      if(typeof(this.brandParameters) === 'string'){
        let temp = [];
        temp.push(this.brandParameters);
        this.brandParameters = temp;
      }
  }

  getRangeParametersValue(queryParams : Params) : void{
    this.rangeParameters = queryParams['range'] == null ? [] : queryParams['range'];
      if(typeof(this.rangeParameters) === 'string'){
        let temp = [];
        temp.push(this.rangeParameters);
        this.rangeParameters = temp;
      }
  }

  onOrderChange(order : any){
    this.isGetCategoryProductsRequestDone = false;
     this.categoryService.getCategoryProductsPage(this.category, this.currentPage, order, this.brandParameters, this.rangeParameters).toPromise()
                         .then(productPage => {
                            this.productPage = productPage;
                            this.products = productPage.content; 
                            this.isGetCategoryProductsRequestDone = true;
                         })
                         .catch(errorResponse => {
                           console.log(errorResponse);
                           this.isGetCategoryProductsRequestDone = true;
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
    this.paramRouteSubscription.unsubscribe();
    this.queryParamRouteSubscription.unsubscribe();
    this.routerEventSubscription.unsubscribe();
    if(this.httpSubscription !== undefined)this.httpSubscription.unsubscribe();
    if(this.httpSubscription2 !== undefined) this.httpSubscription2.unsubscribe();
  }

}
