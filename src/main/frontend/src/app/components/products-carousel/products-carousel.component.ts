import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Subscription } from 'rxjs';
import { ProductPage } from 'src/app/models/productPage';

@Component({
  selector: 'products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.css']
})
export class ProductsCarouselComponent implements OnInit, OnDestroy{

  @Input() carouselTitle : string;
  @Input() carouselHtmlId : string;
  @Input() carouselType : string;
  httpSubscription : Subscription;
  httpSubscription2 : Subscription;

  productPagesInformation : ProductPage;
  productPages : ProductPage[];
  pageNumber : number[];


  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.productPages = [];
    this.pageNumber = [];

    if(this.carouselType === 'favorite'){
      this.addFavoriteProductsToCarousel();
    }else if(this.carouselType === 'new'){
      this.addNewProductsToCarousel();
    }
  }

  addFavoriteProductsToCarousel() : void{
    this.httpSubscription = this.productService.getFavoriteProductsInformation().subscribe(productPage => {
      this.productPagesInformation = productPage;
      this.initializePageNumber(this.productPagesInformation.totalPages);
       this.httpSubscription2 = this.productService.getFavoriteProducts(this.pageNumber).subscribe(productPage => this.productPages.push(productPage));
    });
  }

  addNewProductsToCarousel() : void{
    this.httpSubscription = this.productService.getNewProductsInformation().subscribe(productPage => {
      this.productPagesInformation = productPage;
      this.initializePageNumber(this.productPagesInformation.totalPages);
       this.httpSubscription2 = this.productService.getNewProducts(this.pageNumber).subscribe(productPage => this.productPages.push(productPage));
    });
  }

  initializePageNumber(pages : number) : void{
    for(let i=0; i< pages; i++)
      this.pageNumber[i] = i;
  }

  ngOnDestroy(){
    if(this.httpSubscription !== undefined)this.httpSubscription.unsubscribe();
    if(this.httpSubscription2 !== undefined)this.httpSubscription2.unsubscribe();
  }

}
