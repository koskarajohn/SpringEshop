import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { CartProduct } from 'src/app/models/cartProduct';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit, OnDestroy {

  products : Product[];
  cartProducts : CartProduct[];
  httpSubscription : Subscription;

  private isUpdateProductRequestDone = true;
  private isUserLoggedIn : boolean = false;
  private isLocalStorageEmpty : boolean = localStorage.length === 0;  
  @ViewChild(NavigationBarComponent) navigationBar : NavigationBarComponent;

  constructor(private router : Router, private authenticationService : AuthenticationService
                                     , private cartService : CartService, private productService : ProductService) { }

  ngOnInit() {
    this.cartProducts = [];
    this.isUserLoggedIn = this.authenticationService.isAuthenticated;
    if(this.isUserLoggedIn && !this.isLocalStorageEmpty){
      let userId = localStorage.getItem('userid');
      this.httpSubscription = this.cartService.getCartProducts(userId)
                                              .subscribe(cartProducts => {
                                                this.cartProducts = cartProducts;
                                                this.iniatializeInventoryVariable(this.cartProducts);
                                              }
                                               , error => console.log(error));
    }else if(!this.isUserLoggedIn && this.cartService.doesAnonymousUserCartExist){
      this.cartProducts = this.cartService.getAnonymousUserCart();
      this.iniatializeInventoryVariable(this.cartProducts);
    }
    
  }

  iniatializeInventoryVariable(cartProducts : CartProduct[]) : void{
    this.cartProducts.forEach(cartProduct => cartProduct.isInventoryEnough = true);
  }

  isUserCartEmpty() : boolean{
    return this.cartProducts.length === 0;
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
                    .then(response => {
                      this.navigationBar.setCartCount(this.navigationBar.userId);
                      this.removeProductFromArray(product);
                    })
                    .catch(errorResponse => console.log(errorResponse));
    }else{
      this.removeProductFromArray(product);
      this.cartService.updateAnonymousUserCart(this.cartProducts);
      this.navigationBar.setAnonymousUserCartCount();
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
                      .then(response => {
                        this.navigationBar.setCartCount(this.navigationBar.userId);
                        this.isUpdateProductRequestDone =  true;
                        if(!product.isInventoryEnough){
                          this.updateInventoryStatus(product);
                        }
                      })
                      .catch(erroResponse => this.isUpdateProductRequestDone = true);
      }else{
        this.cartService.updateUserCartProduct(product);
        this.cartProducts = this.cartService.getAnonymousUserCart();
        this.iniatializeInventoryVariable(this.cartProducts);
        this.navigationBar.setAnonymousUserCartCount();
        if(!product.isInventoryEnough){
          this.updateInventoryStatus(product);
        }
      }
      
    }

  }

  updateInventoryStatus(cartProduct : CartProduct) : void{
    let correspondingProduct = this.products.find(product => product.id === cartProduct.productid);
    if(cartProduct.quantity < correspondingProduct.quantity){
      cartProduct.isInventoryEnough = true;
    }
  }

  navigateToIndex() : void{
    this.router.navigate(['']);
  }

  navigateToCheckout() : void{
    this.productService.getSpecificProducts(this.getCartProductIds()).toPromise()
                                                                     .then(products => {
                                                                       this.products = products;
                                                                       if(this.isProductInventoryEnough(this.products)){
                                                                         this.router.navigate(['/checkout']);
                                                                       }
                                                                      })
                                                                     .catch(error => console.log(error));
  }

  getCartProductIds() : number[]{
    return this.cartProducts.map(x => x.productid);
  }

  isProductInventoryEnough(products : Product[]) : boolean{
    let isEnough = true;
    this.cartProducts.forEach(cartProduct => {
      let correspondingProduct = products.find(product => product.id === cartProduct.productid);
      if(cartProduct.quantity > correspondingProduct.quantity){
        cartProduct.quantity = correspondingProduct.quantity;
        cartProduct.isInventoryEnough = false;
        isEnough = false;
      }
    });

    return isEnough;
  }

  ngOnDestroy(): void {
    if(this.httpSubscription !== undefined)this.httpSubscription.unsubscribe();
  }

}
