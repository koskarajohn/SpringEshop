import { Component, OnInit } from '@angular/core';
import { NavigationCategory } from 'src/app/models/navigationCategory';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  categories : NavigationCategory[];
  greekCategoryNames : string[ ] = ['Βιταμίνες','Μέταλλα','Ιχθυέλαια','Υπερτροφές','Αρώματα','Σαμπουάν'];
  englishCategoryNames : string[ ] = ['vitamins','minerals','fish-oils','superfoods','fragrances','shampoos'];
  constructor() { }

  ngOnInit() {
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

}
