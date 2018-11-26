import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/models/cartProduct';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cartProducts : CartProduct[];
  httpSubscription : Subscription;

  private isUserLoggedIn : boolean = false;
  private isLocalStorageEmpty : boolean = localStorage.length === 0;  

  constructor(private authenticationService : AuthenticationService, private cartService : CartService) { }

  ngOnInit() {
    this.cartProducts = [];
    this.isUserLoggedIn = this.authenticationService.isAuthenticated;
    if(this.isUserLoggedIn && !this.isLocalStorageEmpty){
      let userId = localStorage.getItem('userid');
      this.httpSubscription = this.cartService.getCartProducts(userId).subscribe(cartProducts => this.cartProducts = cartProducts);
    }
    
  }

  increaseProductQuantity(product : CartProduct) : void{
    product.quantity += 1;
  }

  decreaseProductQuantity(product : CartProduct) : void{
    product.quantity -= 1;
  }

  isProductQuantityOne(product : CartProduct) : boolean{
    return product.quantity == 1;
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

  deleteProduct(product : CartProduct) : void{
    this.cartService.deleteCartProduct(product.userid, product.productid).toPromise()
                    .then(response => this.removeProductFromArray(product))
                    .catch(errorResponse => console.log(errorResponse));
  }

  removeProductFromArray(product : CartProduct) : void{
    let index = this.cartProducts.indexOf(product);
    this.cartProducts.splice(index, 1);
  }

}
