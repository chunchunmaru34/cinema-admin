import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MovieSessionModule } from '../movie-session/movie-session.module';
import { CinemaModule } from '../cinema/cinema.module';
import { MovieModule } from '../movie/movie.module';
import { AuthGuard } from '../auth/auth.guard';
import { AuthService } from '../auth/auth.service';
import { UsersModule } from '../users/users.module';
import { AdditionalServicesModule } from '../additional-services/additional-services.module';
import { SeatsTypesModule } from '../seats-types/seats-types.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MovieSessionModule,
    CinemaModule,
    MovieModule,
    UsersModule,
    AdditionalServicesModule,
    SeatsTypesModule,
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class HomeModule { }
