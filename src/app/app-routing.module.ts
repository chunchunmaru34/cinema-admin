import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './modules/movie/movies/movies.component';
import { MovieSessionComponent } from './modules/movie-session/movie-sessions-list/movie-session.component';
import { CinemasComponent } from './modules/cinema/cinemas/cinemas.component';
import { MovieDetailsComponent } from './modules/movie/movie-details/movie-details.component';
import { MovieSessionDetailsComponent } from './modules/movie-session/movie-session-details/movie-session-details.component';
import { CinemaDetailsComponent } from './modules/cinema/cinema-details/cinema-details.component';

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
