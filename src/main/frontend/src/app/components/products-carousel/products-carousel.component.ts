import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.css']
})
export class ProductsCarouselComponent implements OnInit, OnDestroy{

  @Input() carouselTitle : string;
  @Input() carouselHtmlId : string;
  httpSubscription : Subscription;

  productLists : Product[][];

  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.httpSubscription = this.productService.getProductList()
        .subscribe(productLists => this.productLists = productLists);
  }

  ngOnDestroy(){
    this.httpSubscription.unsubscribe();
  }

}
