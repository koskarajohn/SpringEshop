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
  available : string = "Σε απόθεμα";
  notAvailable  : string = "Δεν είναι διαθέσιμο";
  productAvailability : string = "";
  routeSubscription : Subscription;
  httpSubscription : Subscription;
  wantedQuantity : number = 1;
  isProductAvailable : boolean = false;

  constructor(private route : ActivatedRoute, private productService : ProductService) { }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => this.productNameParam = params['name']);
    this.httpSubscription = this.productService.getSingleProduct(this.productNameParam)
                                              .subscribe(product => {
                                                this.product = product;
                                                this.isProductAvailable = product.quantity > 0;
                                                this.productAvailability =  this.isProductAvailable ? this.available : this.notAvailable ;
                                              });
    
  }

  ngOnDestroy(){
    this.routeSubscription.unsubscribe();
    this.httpSubscription.unsubscribe();
  }

  increaseProductQuantity() : void{
    this.wantedQuantity += 1;
  }

  decreaseProductQuantity() : void{
    this.wantedQuantity -= 1;
  }

  isProductQuantityOne() : boolean{
    return this.wantedQuantity == 1;
  }

}
