import { Component, OnInit} from '@angular/core';
import { NavigationCategory } from 'src/app/models/navigationCategory';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartService } from 'src/app/services/cart.service';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';

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
  brandParams : string[] = [];
  rangeParams : string[] = [];
  private cartProductCount : number = 0;
  private isUserLoggedIn : boolean = false;
  private isLocalStorageEmpty : boolean = localStorage.length === 0;  
  private user : string = '';
  public userId : string = '';

  private searchText : string ="";

  selectedBrands : string[] = [];
  selectedPriceRanges : number[] = [];

  constructor( private authenticationService : AuthenticationService, 
    private cartService : CartService, private searchService : SearchService, private router: Router) { }

  async ngOnInit() {
    this.initialiseCategories();
    this.isUserLoggedIn = this.authenticationService.isAuthenticated;
    if(this.isUserLoggedIn){

      if(!this.isLocalStorageEmpty){
        this.storeUserName()
        this.setCartCount(this.userId);

      }else{

        await this.authenticationService.getSessionDataAgain();
        this.storeUserName(); 
      }
    }else{
      this.setAnonymousUserCartCount();
    }

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

  storeUserName() : void{
    let storedUser = localStorage.getItem('user');
    let storedUserId = localStorage.getItem('userid');
    if(storedUser !== undefined) this.user = storedUser;
    if(storedUserId !== undefined) this.userId = storedUserId;
  }

  logout(){
    this.authenticationService.logout();
  }

  setCartCount(userId : string) : void{
    this.cartService.getCartProductsCount(userId).toPromise()
                    .then(cartProductCount => this.cartProductCount = cartProductCount.count)
                    .catch(errorResponse => console.log(errorResponse));
  }

  setAnonymousUserCartCount() : void{
    this.cartProductCount = this.cartService.getAnonymousUserCartCount();
  }

  onSearchClicked() : void{
    var regularExpression = /[^0-9^a-z]+/;
    var keywords = this.searchText.split(regularExpression);
    this.router.navigate(['/search'], {queryParams : { keyword : keywords, brand : this.selectedBrands, range : this.selectedPriceRanges, fn : 'yes', page : 0}});
  }

}
