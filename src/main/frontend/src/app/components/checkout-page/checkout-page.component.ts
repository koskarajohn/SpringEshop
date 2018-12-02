import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartProduct } from 'src/app/models/cartProduct';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartService } from 'src/app/services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit, OnDestroy {

  private isSameAddressChecked = true;
  private isCourierChecked = true;
  private shippingCost : number;
  private cartProducts : CartProduct[];
  private isUserLoggedIn : boolean = false;
  private isLocalStorageEmpty : boolean = localStorage.length === 0; 
  private httpSubscription : Subscription; 

  constructor(private authenticationService : AuthenticationService, private cartService : CartService) { }

  ngOnInit() {
    this.shippingCost = this.isCourierChecked ? 2 : 0;
    this.cartProducts = [];
    this.isUserLoggedIn = this.authenticationService.isAuthenticated;
    if(this.isUserLoggedIn && !this.isLocalStorageEmpty){
      let userId = localStorage.getItem('userid');
      this.httpSubscription = this.cartService.getCartProducts(userId).subscribe(cartProducts => this.cartProducts = cartProducts);
    }else if(!this.isUserLoggedIn && this.cartService.doesAnonymousUserCartExist){
      this.cartProducts = this.cartService.getAnonymousUserCart();
    }
  }

  ngOnDestroy(): void {
    if(this.httpSubscription !== undefined) this.httpSubscription.unsubscribe();
  }

  getTotalCartPrice() : number{
    let totalPrice = 0;
    if(this.cartProducts.length !== 0){
      this.cartProducts.forEach(product => {
        totalPrice += product.price * product.quantity
      });
    }
    return totalPrice + this.shippingCost;
  }

  changeShippingCost() : void{
    this.isCourierChecked = !this.isCourierChecked;
    this.shippingCost = this.isCourierChecked ? 2 : 0;
  }
}
