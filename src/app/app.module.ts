import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MovieSessionService } from './movie-session/movie-session.service';
import { CinemaService } from './cinema/cinema.service';
import { AppRoutingModule } from './app-routing.module';
import { MovieModule } from './movie/movie.module';
import { CinemaModule } from './cinema/cinema.module';
import { MovieSessionModule } from './movie-session/movie-session.module';
import { OthersEntitiesPageModule } from './others-entities-page/others-entities-page.module';
import { UsersService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MovieModule,
    CinemaModule,
    MovieSessionModule,
    OthersEntitiesPageModule,
  ],
  providers: [
    MovieSessionService,
    CinemaService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
