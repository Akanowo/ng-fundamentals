import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
  templateUrl: './login.component.html',
  styles: [`
    em { float: right; color: #e05c65; padding-left: 10px; }
    `]
})

export class LoginComponent {
  username;
  password;
  mouseoverlogin;
  constructor(private authservice: AuthService, private router: Router) { }

  login(val) {
    this.authservice.loginUser(val.userName, val.password);
    this.router.navigate(['events']);
  }

  cancel() {
  this.router.navigate(['events']);
  }

}
