import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs/Observable';
import { AUTH_URL } from '../../constants/api-endpoints';
import { Router } from '@angular/router';

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
    const token = localStorage.getItem('token');
    const role = this.jwtHelper.decodeToken(token).role;
    return !this.jwtHelper.isTokenExpired(token) && role === 'admin';
  }

  login(email, password): Observable<any> {
    const payload = {
      email, password
    };
    return this.http.post(`${AUTH_URL}/signin`, payload, httpOptions);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
