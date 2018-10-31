import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit, OnDestroy {

  category : string;
  products : Product[];
  routeSubscription : Subscription;
  httpSubscription : Subscription;

  constructor(private route : ActivatedRoute, private categoryService : CategoryService) { }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => this.category = params['name']);
    this.httpSubscription = this.categoryService.getCategoryProducts(this.category).subscribe(products => this.products = products);
  }

  ngOnDestroy(){
    this.routeSubscription.unsubscribe();
    this.httpSubscription.unsubscribe();
  }

}
