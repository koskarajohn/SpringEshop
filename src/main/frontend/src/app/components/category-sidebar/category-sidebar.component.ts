import { Component, OnInit, OnDestroy } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Subscription } from 'rxjs';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'category-sidebar',
  templateUrl: './category-sidebar.component.html',
  styleUrls: ['./category-sidebar.component.css']
})
export class CategorySidebarComponent implements OnInit, OnDestroy {

  brands : Brand[];
  httpSubscription : Subscription;

  constructor(private brandService : BrandService) { }

  ngOnInit() {
    this.httpSubscription =  this.brandService.getBrands()
                                 .subscribe(brands => this.brands = brands);  
  }

  ngOnDestroy(){
    this.httpSubscription.unsubscribe();
  }

}
