import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavigationCategory } from 'src/app/models/navigationCategory';
import { AuthenticationService } from 'src/app/services/authentication.service';
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

  private isUserLoggedIn : boolean = false;
  private user : string = '';

  constructor( private authenticationService : AuthenticationService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.authenticationService.isAuthenticated;
    let storedUser = localStorage.getItem('user');
    if(this.isUserLoggedIn && storedUser !== undefined) 
       this.user = storedUser;
    this.initialiseCategories();
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

}
