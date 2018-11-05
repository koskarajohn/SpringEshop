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

  constructor(private route : ActivatedRoute, private categoryService : CategoryService) { }

  ngOnInit() {
    this.pageNumbers = [];
    this.paramRouteSubscription = this.route.params.subscribe(params => {
      this.category = params['name'];
      this.currentPage =  this.route.snapshot.queryParams['page'];
      this.categoryTitle = params['name'] === 'fish-oils' ? this.greekCategories['fishoils'] : this.greekCategories[params['name']];
      this.httpSubscription = this.categoryService.getCategoryProductsPage(this.category, this.currentPage).subscribe(productPage => {
        this.productPage = productPage;
        this.products = productPage.content;  
        this.initializePageNumberArray(this.pageNumbers, this.productPage.totalPages);
      });
    });

    this.queryParamRouteSubscription =  this.route.queryParams.subscribe(queryParams => {
      this.currentPage = queryParams['page'];
      this.category = this.route.snapshot.params['name'];
      this.categoryTitle = this.category === 'fish-oils' ? this.greekCategories['fishoils'] : this.greekCategories[this.category];
      this.httpSubscription2 = this.categoryService.getCategoryProductsPage(this.category, this.currentPage).subscribe(productPage => {
        this.productPage = productPage;
        this.products = productPage.content; 
      });

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
    this.httpSubscription.unsubscribe();
    this.httpSubscription2.unsubscribe();
  }

}
