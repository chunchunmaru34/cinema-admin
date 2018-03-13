import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {


  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(event, email, password) {
    event.preventDefault();
    this.authService.login(email, password)
      .subscribe((data) => localStorage.setItem('token', data.token));
  }

}

