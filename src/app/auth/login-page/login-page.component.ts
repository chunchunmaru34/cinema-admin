import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AUTH_TOKEN_NAME } from '../auth.constants';
import { MOVIES_ROUTE } from '../../../constants/routes';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  error: any;
  timer;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  handleLoginResponse(data): void {
    localStorage.setItem(AUTH_TOKEN_NAME, data.token);
    this.router.navigate([MOVIES_ROUTE]);
  }

  handleError(error): void {
    this.error = error;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.error = null, 5000);
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

