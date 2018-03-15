import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs/Observable';
import { AUTH_URL } from '../../constants/api-endpoints';
import { ADMIN_ROLE, AUTH_TOKEN_NAME } from './auth.constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) { }

  get isAuthenticated() {
    const token = this.jwtHelper.tokenGetter();
    const role = this.jwtHelper.decodeToken(token).role;
    return !this.jwtHelper.isTokenExpired(token) && role === ADMIN_ROLE;
  }

  login(email, password): Observable<any> {
    const payload = {
      email, password
    };
    return this.http.post(`${AUTH_URL}/signin`, payload, httpOptions);
  }

  logout(): void {
    localStorage.removeItem(AUTH_TOKEN_NAME);
    this.router.navigate(['/login']);
  }
}
