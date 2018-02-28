import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MovieSessionService } from './movie-session/movie-session.service';
import { CinemaService } from './cinema/cinema.service';
import { AppRoutingModule } from './app-routing.module';
import {MovieModule} from './movie/movie.module';
import {CinemaModule} from './cinema/cinema.module';
import {MovieSessionModule} from './movie-session/movie-session.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, MovieModule, CinemaModule,
    MovieSessionModule
  ],
  providers: [MovieSessionService, CinemaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
