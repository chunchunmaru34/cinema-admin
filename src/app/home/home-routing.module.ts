import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from '../movie/movies/movies.component';
import { MovieSessionComponent } from '../movie-session/movie-sessions-list/movie-session.component';
import { CinemasComponent } from '../cinema/cinemas/cinemas.component';
import { MovieDetailsComponent } from '../movie/movie-details/movie-details.component';
import { MovieSessionDetailsComponent } from '../movie-session/movie-session-details/movie-session-details.component';
import { CinemaDetailsComponent } from '../cinema/cinema-details/cinema-details.component';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../auth/auth.guard';
import { UsersComponent } from '../users/users.component';
import { AdditionsComponent } from '../additional-services/additions.component';
import { SeatsTypesComponent } from '../seats-types/seats-types.component';

import {
  HOME_ROUTE,
  MOVIES_ROUTE,
  MOVIE_SESSIONS_ROUTE,
  CINEMAS_ROUTE,
  USERS_ROUTE,
  ADDITIONAL_SERVICES_ROUTE,
  SEATS_TYPES_ROUTE,
} from '../../constants/routes';

const routes: Routes = [
  { path: HOME_ROUTE, component: HomeComponent, canActivate: [AuthGuard], children: [
    { path: MOVIES_ROUTE, component: MoviesComponent },
    { path: `${MOVIES_ROUTE}/:id`, component: MovieDetailsComponent },
    { path: MOVIE_SESSIONS_ROUTE, component: MovieSessionComponent },
    { path: `${MOVIE_SESSIONS_ROUTE}/:id`, component: MovieSessionDetailsComponent },
    { path: CINEMAS_ROUTE, component: CinemasComponent },
    { path: `${CINEMAS_ROUTE}/:id`, component: CinemaDetailsComponent},
    { path: USERS_ROUTE, component: UsersComponent},
    { path: ADDITIONAL_SERVICES_ROUTE, component: AdditionsComponent},
    { path: SEATS_TYPES_ROUTE, component: SeatsTypesComponent},
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule { }
