import { Component, OnInit } from '@angular/core';
import { AuthService } from '../users/auth.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) { }
  ngOnInit() {
  }

}
