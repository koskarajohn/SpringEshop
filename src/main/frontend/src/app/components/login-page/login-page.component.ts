import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  

  isRedirectedFromRegister : boolean =  false;
  routeSubscription : Subscription;

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.routeSubscription = this.route.queryParams.subscribe(params => {
      if(params['redirect'] === 'register') this.isRedirectedFromRegister = true;
    });
  }

  ngOnDestroy(): void {
    if(this.routeSubscription !== undefined) this.routeSubscription.unsubscribe();
  }

}
