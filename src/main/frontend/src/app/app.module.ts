import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ShopServicesComponent } from './components/shop-services/shop-services.component';
import { DiscountCarouselComponent } from './components/discount-carousel/discount-carousel.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MyFooterComponent } from './components/my-footer/my-footer.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopServicesComponent,
    DiscountCarouselComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    MyFooterComponent,
    NavigationBarComponent,
    CheckoutComponent,
    CartComponent,
    CategoryComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
