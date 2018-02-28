import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movie/movies/movies.component';
import { MovieSessionComponent } from './movie-session/movie-sessions-list/movie-session.component';
import { CinemasComponent } from './cinema/cinemas/cinemas.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import {MovieSessionDetailsComponent} from './movie-session/movie-session-details/movie-session-details.component';
import {CinemaDetailsComponent} from './cinema/cinema-details/cinema-details.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: 'movie-sessions', component: MovieSessionComponent },
  { path: 'movie-sessions/:id', component: MovieSessionDetailsComponent },
  { path: 'cinemas', component: CinemasComponent },
  { path: 'cinemas/:id', component: CinemaDetailsComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
