import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtModule } from '@auth0/angular-jwt';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MovieSessionModule } from '../movie-session/movie-session.module';
import { CinemaModule } from '../cinema/cinema.module';
import { MovieModule } from '../movie/movie.module';
import { AuthGuard } from '../auth/auth.guard';
import { AuthService } from '../auth/auth.service';
import { AUTH_TOKEN_NAME, WHITELISTED_DOMAINS } from '../auth/auth.constants';

@NgModule({
  imports: [
    CommonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem(AUTH_TOKEN_NAME),
        whitelistedDomains: WHITELISTED_DOMAINS
      }
    }),
    HomeRoutingModule,
    MovieSessionModule,
    CinemaModule,
    MovieModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    JwtHelperService,
    AuthGuard,
    AuthService
  ]
})
export class HomeModule { }
