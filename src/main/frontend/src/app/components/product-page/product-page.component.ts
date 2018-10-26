import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit, OnDestroy {

  productNameParam : string;
  product : Product;
  routeSubscription : Subscription;
  httpSubscription : Subscription;

  constructor(private route : ActivatedRoute, private productService : ProductService) { }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => this.productNameParam = params['name']);
    this.httpSubscription = this.productService.getSingleProduct(this.productNameParam)
                                .subscribe(product => this.product = product);
    
  }

  ngOnDestroy(){
    this.routeSubscription.unsubscribe();
    this.httpSubscription.unsubscribe();
  }

}
