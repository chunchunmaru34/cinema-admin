import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import * as routes from '../../constants/routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  routes: any = {};

  constructor(private authService: AuthService) {
    // transforming routes to `/${route} for <a> tag`
    Object.keys(routes).forEach(key => routes[key] = '/' + routes[key]);
    this.routes = routes;
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
}
