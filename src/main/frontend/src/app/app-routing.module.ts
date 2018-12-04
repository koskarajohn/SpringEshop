import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { OrderComponent } from './components/order/order.component';

export const appRoutes: Routes = [
  { path: '', 
    component: IndexPageComponent 
  },
  {
    path: 'login',
    component:LoginPageComponent
  },
  {
    path: 'register',
    component:RegisterPageComponent
  },
  {
    path: 'cart',
    component:CartPageComponent
  },
  {
    path: 'checkout',
    component:CheckoutPageComponent
  }
  ,
  {
    path: 'category/:name',
    component:CategoryPageComponent
  },
  {
    path: 'order/:id',
    component:OrderComponent
  },
  {
    path: 'product/:name',
    component:ProductPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
