import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartProduct } from 'src/app/models/cartProduct';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartService } from 'src/app/services/cart.service';
import { Subscription } from 'rxjs';
import { ShippingInfo } from 'src/app/models/shippingInfo';
import { BillingInfo } from 'src/app/models/billingInfo';
import { OrderDetails } from 'src/app/models/orderDetails';

@Component({
  selector: 'checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit, OnDestroy {

  private orderDetails = {} as OrderDetails;

  private isSameAddressChecked = true;
  private isCourierChecked = true;
  private shippingCost : number;
  private cartProducts : CartProduct[];
  private isUserLoggedIn : boolean = false;
  private isLocalStorageEmpty : boolean = localStorage.length === 0; 
  private httpSubscription : Subscription; 

  constructor(private authenticationService : AuthenticationService, private cartService : CartService) { }

  ngOnInit() {
    this.orderDetails.isShippingAddressSameWithBillingAddress = true;
    this.orderDetails.shippingInfo = {} as ShippingInfo;
    this.orderDetails.billingInfo = {} as BillingInfo;

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

  onSubmit(): void {
    this.orderDetails.cartProducts = this.cartProducts;
    this.orderDetails.shippingInfo.method = this.isCourierChecked ? 'Courier' : 'Takeaway';
    this.orderDetails.billingInfo.method =  'Cash On Delivery' ;
    if(this.orderDetails.isShippingAddressSameWithBillingAddress)
       this.copyShippingInfoToBillingInfo();
    console.log(this.orderDetails);
  }

  copyShippingInfoToBillingInfo() : void{
    this.orderDetails.billingInfo.first_name = this.orderDetails.shippingInfo.first_name;
    this.orderDetails.billingInfo.last_name = this.orderDetails.shippingInfo.last_name;
    this.orderDetails.billingInfo.street = this.orderDetails.shippingInfo.street;
    this.orderDetails.billingInfo.post_code = this.orderDetails.shippingInfo.post_code;
    this.orderDetails.billingInfo.city = this.orderDetails.shippingInfo.city;
    this.orderDetails.billingInfo.phone= this.orderDetails.shippingInfo.phone;
  }

  getTotalCartPrice() : number{
    let totalPrice = 0;
    if(this.cartProducts.length !== 0){
      this.cartProducts.forEach(product => {
        totalPrice += product.price * product.quantity
      });
    }
    return totalPrice;
  }

  changeShippingCost() : void{
    this.isCourierChecked = !this.isCourierChecked;
    this.shippingCost = this.isCourierChecked ? 2 : 0;
  }

  changeisShippingAddressSameWithBillingAddress() : void{
    this.orderDetails.isShippingAddressSameWithBillingAddress = !this.orderDetails.isShippingAddressSameWithBillingAddress;
    if(!this.orderDetails.isShippingAddressSameWithBillingAddress){
      this.orderDetails.billingInfo = {} as BillingInfo;
    }
  }

  ngOnDestroy(): void {
    if(this.httpSubscription !== undefined) this.httpSubscription.unsubscribe();
  }
}
