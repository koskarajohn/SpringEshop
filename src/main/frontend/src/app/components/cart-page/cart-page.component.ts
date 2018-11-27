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

  private isUpdateProductRequestDone = true;
  private isUserLoggedIn : boolean = false;
  private isLocalStorageEmpty : boolean = localStorage.length === 0;  

  constructor(private authenticationService : AuthenticationService, private cartService : CartService) { }

  ngOnInit() {
    this.cartProducts = [];
    this.isUserLoggedIn = this.authenticationService.isAuthenticated;
    if(this.isUserLoggedIn && !this.isLocalStorageEmpty){
      let userId = localStorage.getItem('userid');
      this.httpSubscription = this.cartService.getCartProducts(userId).subscribe(cartProducts => this.cartProducts = cartProducts);
    }else if(!this.isUserLoggedIn && this.cartService.doesAnonymousUserCartExist){
      this.cartProducts = this.cartService.getAnonymousUserCart();
    }
    
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
    if(this.isUserLoggedIn){
      this.cartService.deleteCartProduct(product.userid, product.productid).toPromise()
                    .then(response => this.removeProductFromArray(product))
                    .catch(errorResponse => console.log(errorResponse));
    }else{
      this.removeProductFromArray(product);
      this.cartService.updateAnonymousUserCart(this.cartProducts);
    }
    
  }

  removeProductFromArray(product : CartProduct) : void{
    let index = this.cartProducts.indexOf(product);
    this.cartProducts.splice(index, 1);
  }

  updateCart(product : CartProduct){
    if(product.quantity !== null){

      console.log('updating cart');

      if(this.isUserLoggedIn){
        this.isUpdateProductRequestDone = false;
        this.cartService.updateCartProduct(product).toPromise()
                      .then(response => this.isUpdateProductRequestDone =  true)
                      .catch(erroResponse => this.isUpdateProductRequestDone = true);
      }else{
        this.cartService.updateUserCartProduct(product);
        this.cartProducts = this.cartService.getAnonymousUserCart();
      }
      
    }

  }

}
