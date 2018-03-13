import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class AuthService {
  LOGIN_URL = 'http://localhost:3003/api/auth/signin';

  constructor(
    private http: HttpClient
  ) { }

  login(email, password): Observable<any> {
    const payload = {
      email, password
    };
    return this.http.post(this.LOGIN_URL, payload, httpOptions);
  }
}
