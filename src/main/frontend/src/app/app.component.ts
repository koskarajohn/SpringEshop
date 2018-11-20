import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'frontend';

  constructor( private authenticationService : AuthenticationService) { }

  ngOnInit(): void {
    if(!this.authenticationService.isAuthenticated)
       this.authenticationService.getAnonymousSession();
  }
}
