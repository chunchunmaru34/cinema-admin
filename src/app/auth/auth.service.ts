import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SIGN_IN_URL } from '../../../config/api-endpoints';
import { AUTH_TOKEN_NAME } from './auth.constants';
import { LOGIN_ROUTE } from '../../constants/routes';
import { APP_NAME } from '../../constants/app';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  get isAuthenticated() {
    return !!this.getToken();
  }

  login(email, password): Observable<any> {
    const payload = {
      email,
      password,
      app: APP_NAME,
    };
    return this.http.post(SIGN_IN_URL, payload, httpOptions);
  }

  logout(): void {
    localStorage.removeItem(AUTH_TOKEN_NAME);
    this.router.navigate([LOGIN_ROUTE]);
  }

  getToken() {
    return localStorage.getItem(AUTH_TOKEN_NAME);
  }
}
