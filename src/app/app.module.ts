import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieSessionService } from './movie-session/movie-session.service';
import { CinemaService } from './cinema/cinema.service';
import { AppRoutingModule } from './app-routing.module';
import { MovieModule } from './movie/movie.module';
import { CinemaModule } from './cinema/cinema.module';
import { MovieSessionModule } from './movie-session/movie-session.module';
import { UsersService } from './users/user.service';
import { UsersModule } from './users/users.module';
import { SeatsTypesModule } from './seats-types/seats-types.module';
import { AdditionalServicesModule } from './additional-services/additional-services.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MovieModule,
    CinemaModule,
    MovieSessionModule,
    UsersModule,
    SeatsTypesModule,
    AdditionalServicesModule
  ],
  providers: [
    MovieSessionService,
    CinemaService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
