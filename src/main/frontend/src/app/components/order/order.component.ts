import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/models/order';
import { CheckoutService } from 'src/app/services/checkout.service';
import { CartProduct } from 'src/app/models/cartProduct';
import { Router } from '@angular/router';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {

  private order = {} as Order;
  private orderProducts : CartProduct[] = [];
  private user : string;
  private date : string;
  private shippingCost : number;
  private routeSubscription : Subscription;

  constructor(private router : Router, private checkoutService : CheckoutService) { }

  ngOnInit() {
    this.order = this.checkoutService.getCurrentOrder();
    this.date = this.getOrderDate();
    this.orderProducts =  this.checkoutService.getOrderProducts();
    this.shippingCost = this.order.shippingInfo.method === 'Courier' ? 2 : 0 ;
    this.user = this.order.user === null ? 'χρήστη' : this.order.user.first_name + ' ' + this.order.user.last_name;
  }

  ngOnDestroy(): void {
    if(this.routeSubscription !== undefined) this.routeSubscription.unsubscribe();
  }

  getOrderDate() : string{
    let date = new Date(new Date(this.order.order_date)).getDate();
    let month = new Date(new Date(this.order.order_date)).getMonth();
    let year = new Date(new Date(this.order.order_date)).getFullYear();
    return date + '/' + month + '/' + year;
  }

  getTotalCartPrice() : number{
    let totalPrice = 0;
    if(this.orderProducts.length !== 0){
      this.orderProducts.forEach(product => {
        totalPrice += product.price * product.quantity
      });
    }
    return totalPrice + this.shippingCost;
  }

  navigateToIndex() : void{
    this.router.navigate[''];
  }
}
