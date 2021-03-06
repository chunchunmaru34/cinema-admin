import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { LOGIN_ROUTE } from '../../constants/routes';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {

  }

  canActivate(): boolean {
    if (this.auth.isAuthenticated) {
      return true;
    } else {
      this.router.navigate([LOGIN_ROUTE]);
      return false;
    }
  }
}
