import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  constructor(private authService: AuthService,
              private jwtService: JwtHelperService,
              private router: Router) { }

  ngOnInit() {
  }

  handleLoginResponse(data): void {
    const token = this.jwtService.decodeToken(data.token);
    if (token.role !== 'admin') {
      console.log('unauthorized');
      return;
    }
    localStorage.setItem('token', data.token);
    this.router.navigate(['/movies']);
  }

  login(event, email, password) {
    event.preventDefault();
    this.authService.login(email, password)
      .subscribe((data) => this.handleLoginResponse(data));
  }
}

