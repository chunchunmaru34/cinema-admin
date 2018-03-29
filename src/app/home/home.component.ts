import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import {
  USERS_ROUTE,
  MOVIE_SESSIONS_ROUTE,
  MOVIES_ROUTE,
  ADDITIONAL_SERVICES_ROUTE,
  SEATS_TYPES_ROUTE,
  CINEMAS_ROUTE
} from '../../constants/routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  routes = {
    USERS_ROUTE: `/${USERS_ROUTE}`,
    MOVIE_SESSIONS_ROUTE: `/${MOVIE_SESSIONS_ROUTE}`,
    MOVIES_ROUTE: `/${MOVIES_ROUTE}`,
    ADDITIONAL_SERVICES_ROUTE: `/${ADDITIONAL_SERVICES_ROUTE}`,
    SEATS_TYPES_ROUTE: `/${SEATS_TYPES_ROUTE}`,
    CINEMAS_ROUTE: `/${CINEMAS_ROUTE}`,
  };

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
}
