import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.css']
})
export class ProductsCarouselComponent implements OnInit {

  @Input() carouselTitle : string;

  productLists : Product[][];

  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.productService.getProductList()
        .subscribe(productLists => this.productLists = productLists);
  }

}
