import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { Product } from 'src/app/models/product';
import { ProductPage } from 'src/app/models/productPage';

@Component({
  selector: 'category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit, OnDestroy {

  category : string;
  categoryTitle : string;
  currentPage : number = 0;
  products : Product[];
  productPage : ProductPage;
  pageNumbers : number[];
  brandParameters = [] as string[];
  rangeParameters : string[] = [];
  isGetCategoryProductsRequestDone : boolean = true;

  paramRouteSubscription : Subscription;
  queryParamRouteSubscription : Subscription;
  httpSubscription : Subscription;
  httpSubscription2 : Subscription;

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

  constructor(private route : ActivatedRoute, private categoryService : CategoryService) { }

  ngOnInit() {
    this.paramRouteSubscription = this.route.params.subscribe(params => {
      this.isGetCategoryProductsRequestDone = false;
      this.brandParameters= [];
      this.selectedValue = 'asc';
      this.category = params['name'];
      this.currentPage =  this.route.snapshot.queryParams['page'];
      this.categoryTitle = params['name'] === 'fish-oils' ? this.greekCategories['fishoils'] : this.greekCategories[params['name']];
      this.httpSubscription = this.categoryService.getCategoryProductsPage(this.category, this.currentPage, this.selectedValue, this.brandParameters, this.rangeParameters).subscribe(productPage => {
        this.pageNumbers = [];
        this.productPage = productPage;
        this.products = productPage.content;
        this.isGetCategoryProductsRequestDone = true;  
        this.initializePageNumberArray(this.pageNumbers, this.productPage.totalPages);
      }, 
      error => {
        console.log(error);
        this.isGetCategoryProductsRequestDone = true;
      });
    });

    this.queryParamRouteSubscription =  this.route.queryParams.subscribe(queryParams => {
      this.isGetCategoryProductsRequestDone = false;
      let oldCategory = this.category;
      let oldPage = this.currentPage;
      this.currentPage = queryParams['page'];

      let oldBrandParametersLength = this.brandParameters.length;
      let newBrandParametersLength;
      if( queryParams['brand'] !== undefined){
        this.brandParameters = queryParams['brand'];
        newBrandParametersLength = this.brandParameters.length;
      } 
      let didBrandParametersChange = false;

      if(newBrandParametersLength !== undefined){
        didBrandParametersChange = oldBrandParametersLength !== newBrandParametersLength  ? true : false;
      }

      let oldRangeParametersLength = this.rangeParameters.length;
      let newRangeParametersLength;
      if( queryParams['range'] !== undefined){
        this.rangeParameters = queryParams['range'];
        newRangeParametersLength = this.rangeParameters.length;
      } 
      let didRangeParametersChange = false;

      if(newRangeParametersLength !== undefined){
        didRangeParametersChange = oldRangeParametersLength !== newRangeParametersLength  ? true : false;
      }
      
      this.category = this.route.snapshot.params['name'];
      this.categoryTitle = this.category === 'fish-oils' ? this.greekCategories['fishoils'] : this.greekCategories[this.category];
      if( oldCategory === this.category && (this.currentPage != oldPage || didBrandParametersChange || didRangeParametersChange) ){
        this.httpSubscription2 = this.categoryService.getCategoryProductsPage(this.category, this.currentPage, this.selectedValue, this.brandParameters, this.rangeParameters).subscribe(productPage => {
          this.pageNumbers = [];
          this.productPage = productPage;
          this.products = productPage.content; 
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

  ngOnDestroy(){
    this.paramRouteSubscription.unsubscribe();
    this.queryParamRouteSubscription.unsubscribe();
    if(this.httpSubscription !== undefined)this.httpSubscription.unsubscribe();
    if(this.httpSubscription2 !== undefined) this.httpSubscription2.unsubscribe();
  }

}
