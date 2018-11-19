import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ShopServicesComponent } from './components/shop-services/shop-services.component';
import { DiscountCarouselComponent } from './components/discount-carousel/discount-carousel.component';
import { AppRoutingModule } from './app-routing.module';
import { MyFooterComponent } from './components/my-footer/my-footer.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsCarouselComponent } from './components/products-carousel/products-carousel.component';
import { CategorySidebarComponent } from './components/category-sidebar/category-sidebar.component';
import { RatingComponent } from './components/rating/rating.component';
import { FormsModule }   from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationStatusChangeInterceptor } from './interceptors/authenticationStatusChangeInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    ShopServicesComponent,
    DiscountCarouselComponent,
    MyFooterComponent,
    NavigationBarComponent,
    CartPageComponent,
    CategoryPageComponent,
    CheckoutPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ProductPageComponent,
    IndexPageComponent,
    ProductComponent,
    ProductsCarouselComponent,
    CategorySidebarComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
