import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartService } from 'src/app/services/cart.service';
import { CartProduct } from 'src/app/models/cartProduct';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { Review } from 'src/app/models/review';
import { ReviewService } from 'src/app/services/review.service';

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
  isAddProductRequestDone : boolean = true;
  isInventoryNotEnough : boolean = false;
  reviews : Review[] = [];
  reviewsCount : number = 0;
  areThereAnyReviews : boolean = false;
  rating : number = 0;
  width : number = 0;
  isGetRatingRequestDone : boolean = false;

  productCategory : string ;
  categoryRoute : string;
  pageParam : number = 0;
  categories = {
    Vitamins : { greekName : 'Βιταμίνες', route : 'vitamins'},
    Minerals : { greekName : 'Μέταλλα', route : 'minerals'},
    Fishoils : { greekName : 'Ιχθυέλαια', route : 'fish-oils'},
    Superfoods : { greekName : 'Υπερτροφές', route : 'superfoods'},
    Fragrances : { greekName : 'Αρώματα', route : 'fragrances'},
    Shampoos : { greekName : 'Σαμπουάν', route : 'shampoos'}
  };

  @ViewChild(NavigationBarComponent) navigationBar : NavigationBarComponent;
  private isUserLoggedIn : boolean = false;
  private isLocalStorageEmpty : boolean = localStorage.length === 0;  

  constructor(private route : ActivatedRoute, private authenticationService : AuthenticationService, 
              private cartService : CartService, private productService : ProductService, 
              private router : Router, private reviewService : ReviewService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.authenticationService.isAuthenticated;
    this.routeSubscription = this.route.params.subscribe(params => this.productNameParam = params['name']);
    this.httpSubscription = this.productService.getSingleProduct(this.productNameParam)
                                              .subscribe(product => {
                                                this.product = product;
                                                this.productCategory = product.category.name === 'Fish-Oils' ? this.categories.Fishoils.greekName : this.categories[product.category.name].greekName;
                                                this.categoryRoute = product.category.name === 'Fish-Oils' ? this.categories.Fishoils.route : this.categories[product.category.name].route;
                                                this.isProductAvailable = product.quantity > 0;
                                                this.productAvailability =  this.isProductAvailable ? this.available : this.notAvailable ;
                                                this.getReviews();
                                              });
  }

  getReviews() : void{
    this.reviewService.getReviews(this.product.id).toPromise().then(reviews => {
                                                                   this.reviews = reviews;
                                                                   this.areThereAnyReviews = this.reviews.length > 0;
                                                                   this.reviewsCount = this.reviews.length;
                                                                   if(this.areThereAnyReviews){
                                                                     this.getRating();
                                                                   }else{
                                                                     this.isGetRatingRequestDone = true;
                                                                   }
                                                              })
                                                              .catch(error => console.log(error));
  }

  getRating() : void{
    this.reviewService.getProductAverageRating(this.product.id).toPromise().then(productRating => {
                                                                            this.rating = productRating.rating;
                                                                            this.width = (this.rating / 5) * 100;
                                                                            this.isGetRatingRequestDone = true;
                                                                          })
                                                                          .catch(error => {
                                                                            console.log(error);
                                                                            this.isGetRatingRequestDone = true;
                                                                          });
  }

  getArray(){
    return new Array(5);
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

  addProductToCart() : void{
    this.isInventoryNotEnough = this.wantedQuantity > this.product.quantity;
    if(this.isInventoryNotEnough && this.isProductAvailable) {
      this.productAvailability = 'Υπάρχουν μόνο ' + this.product.quantity + ' προϊόντα διαθέσιμα'
      return;
    }

    if(this.isUserLoggedIn && !this.isLocalStorageEmpty){
      let userId = localStorage.getItem('userid');
      this.isAddProductRequestDone = false;
      this.cartService.getCartProduct(Number(userId), this.product.id).toPromise()
                      .then(cartProduct => {
                        cartProduct.quantity = cartProduct.quantity + this.wantedQuantity;
                        this.cartService.updateCartProduct(cartProduct).toPromise()
                        .then(response => {
                          this.navigationBar.setCartCount(this.navigationBar.userId);
                          this.isAddProductRequestDone = true;
                        })
                        .catch(errorResponse => {
                          console.log(errorResponse);
                        });
                      })
                      .catch( errorResponse => {
                         this.cartService.addProductTocart(Number(userId), this.product.id, this.wantedQuantity)
                                         .toPromise()
                                         .then(cartProduct => {
                                           this.navigationBar.setCartCount(this.navigationBar.userId);
                                           this.isAddProductRequestDone = true;
                                          })
                                         .catch(errorResponse => {
                                           console.log(errorResponse);
                                           this.isAddProductRequestDone = true;
                                          });
                      });
    }else if(!this.isUserLoggedIn){
      let cartProduct = {} as CartProduct;
      cartProduct.productid = this.product.id;
      cartProduct.name = this.product.name;
      cartProduct.brand= this.product.brand.name;
      cartProduct.price = this.product.price;
      cartProduct.quantity = this.wantedQuantity;
      cartProduct.imageUrl = this.product.verySmallImageUrl;
      this.cartService.addProductToAnonymousUserCart(cartProduct);
      this.navigationBar.setAnonymousUserCartCount();
    }
  }

  navigateToAddReview() : void{
    this.router.navigate(['/product/' + this.product.name + '/review/new']);
  }

  ngOnDestroy(){
    if(this.routeSubscription !== undefined) this.routeSubscription.unsubscribe();
    if(this.httpSubscription !== undefined) this.httpSubscription.unsubscribe();
  }

}
