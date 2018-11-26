import { Component, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { NavigationCategory } from 'src/app/models/navigationCategory';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit{
  

  categories : NavigationCategory[];
  greekCategoryNames : string[ ] = ['Βιταμίνες','Μέταλλα','Ιχθυέλαια','Υπερτροφές','Αρώματα','Σαμπουάν'];
  englishCategoryNames : string[ ] = ['vitamins','minerals','fish-oils','superfoods','fragrances','shampoos'];
  pageParam : number = 0;
  private cartProductCount : number = 0;
  private isUserLoggedIn : boolean = false;
  private isLocalStorageEmpty : boolean = localStorage.length === 0;  
  private user : string = '';
  private userId : string = '';

  constructor( private authenticationService : AuthenticationService, private cartService : CartService) { }

  async ngOnInit() {
    this.isUserLoggedIn = this.authenticationService.isAuthenticated;
    if(this.isUserLoggedIn){

      if(!this.isLocalStorageEmpty){
        this.storeUserName()
        this.getCartCount(this.userId);

      }else{

        await this.authenticationService.getSessionDataAgain();
        this.storeUserName(); 
      }
    }

    this.initialiseCategories();
  }

  storeUserName() : void{
    let storedUser = localStorage.getItem('user');
    let storedUserId = localStorage.getItem('userid');
    if(storedUser !== undefined) this.user = storedUser;
    if(storedUserId !== undefined) this.userId = storedUserId;
  }

  initialiseCategories() : void{
    this.categories = [];
    for(let i=0; i < this.greekCategoryNames.length; i++){
      let navigationCategory = {} as NavigationCategory;
      navigationCategory.greekName = this.greekCategoryNames[i];
      navigationCategory.englishName =  this.englishCategoryNames[i];
      this.categories.push(navigationCategory);
    }
  }

  logout(){
    this.authenticationService.logout();
  }

  getCartCount(userId : string) : void{
    this.cartService.getCartProductsCount(userId).toPromise()
                    .then(cartProductCount => this.cartProductCount = cartProductCount.count)
                    .catch(errorResponse => console.log(errorResponse));
  }

}
