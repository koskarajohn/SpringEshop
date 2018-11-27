import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { CartProduct } from './models/cartProduct';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'frontend';

  constructor( private authenticationService : AuthenticationService, private cartService : CartService) { }

  ngOnInit(): void {
    if(!this.authenticationService.isAuthenticated){
      this.authenticationService.getAnonymousSession();
      this.cartService.createAnonymousUserCart();
    } 
  }


}
