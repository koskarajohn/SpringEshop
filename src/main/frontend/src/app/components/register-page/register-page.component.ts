import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  user : User;

  constructor(private registerService : RegisterService) { }

  ngOnInit() {
    this.user = {} as User;
  }

  onSubmit(): void {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.user));
  }

  arePasswordsFieldsTheSame() : boolean{
    return this.user.password === this.user.confirm_password;
  }

}
