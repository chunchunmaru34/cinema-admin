import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ADMIN_ROLE, ACCESS_FORBIDDEN_MESSAGE, AUTH_TOKEN_NAME } from '../auth.constants';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  error: any;
  timeout: number;

  constructor(private authService: AuthService,
              private jwtService: JwtHelperService,
              private router: Router) { }

  ngOnInit() {
  }

  handleLoginResponse(data): void {
    const token = this.jwtService.decodeToken(data.token);
    if (token.role !== ADMIN_ROLE) {
      this.handleError({ message: ACCESS_FORBIDDEN_MESSAGE });
      return;
    }
    localStorage.setItem(AUTH_TOKEN_NAME, data.token);
    this.router.navigate(['/movies']);
  }

  handleError(error): void {
    this.error = error;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.error = null, 5000);
  }

  login(event, email, password) {
    event.preventDefault();
    this.authService.login(email, password)
      .subscribe(
        data => this.handleLoginResponse(data),
        httpError => this.handleError(httpError.error)
      );
  }
}

