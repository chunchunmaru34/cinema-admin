import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { AUTH_TOKEN_NAME } from '../auth.constants';
import { MOVIES_ROUTE } from '../../../constants/routes';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  error: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.handleLoginResponse = this.handleLoginResponse.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleLoginResponse(data): void {
    localStorage.setItem(AUTH_TOKEN_NAME, data.token);
    this.router.navigate([MOVIES_ROUTE]);
  }

  handleError(res): void {
    this.error = res.error;
  }

  login(event, email, password) {
    event.preventDefault();

    this.authService.login(email, password)
      .subscribe(
        this.handleLoginResponse,
        this.handleError
      );
  }
}

