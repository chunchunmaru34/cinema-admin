import { Component } from '@angular/core';
import { MovieSession } from '../movie-session';
import { MovieSessionService } from '../movie-session.service';
import {
  MOVIE_SESSIONS_ROUTE,
  MOVIES_ROUTE,
  CINEMAS_ROUTE
} from '../../../constants/routes';
import List from '../../../classes/list/List';

@Component({
  selector: 'app-movie-session',
  templateUrl: './movie-session.component.html',
  styleUrls: ['./movie-session.component.scss']
})
export class MovieSessionComponent extends List<MovieSession>{
  defaultSortingOrder = {
    date: 0,
  };
  defaultRequestParams = {
    relevant: false
  };

  MOVIE_SESSIONS_ROUTE = MOVIE_SESSIONS_ROUTE;
  CINEMAS_ROUTE = CINEMAS_ROUTE;
  MOVIES_ROUTE = MOVIES_ROUTE;

  constructor(movieSessionsService: MovieSessionService) {
    super();
    this.service = movieSessionsService;
  }

  deleteMovieSession(event, id: string) {
    event.stopPropagation();
    this.deleteItem(id);
  }
}
