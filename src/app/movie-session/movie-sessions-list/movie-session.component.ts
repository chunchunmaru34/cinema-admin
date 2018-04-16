import { Component, OnInit } from '@angular/core';
import { MovieSession } from '../movie-session';
import { MovieSessionService } from '../movie-session.service';
import {
  MOVIE_SESSIONS_ROUTE,
  MOVIES_ROUTE,
  CINEMAS_ROUTE
} from '../../../constants/routes';

@Component({
  selector: 'app-movie-session',
  templateUrl: './movie-session.component.html',
  styleUrls: ['./movie-session.component.scss']
})
export class MovieSessionComponent implements OnInit {
  movieSessions: MovieSession[];

  totalItems: number;
  itemsLimit: number;
  pages: number;

  lastSearchCriteria = {};

  ITEMS_PER_PAGE = 10;

  MOVIE_SESSIONS_ROUTE = MOVIE_SESSIONS_ROUTE;
  CINEMAS_ROUTE = CINEMAS_ROUTE;
  MOVIES_ROUTE = MOVIES_ROUTE;

  constructor(private movieSessionsService: MovieSessionService) { }

  ngOnInit() {
    this.receiveMovieSessions = this.receiveMovieSessions.bind(this);
    this.getMovieSessions = this.getMovieSessions.bind(this);
    this.getMovieSessions();
  }

  getMovieSessions(criteria?: any): void {
    const params = {
      limit: this.ITEMS_PER_PAGE,
      ...this.lastSearchCriteria,
      ...criteria
    };
    this.lastSearchCriteria = params;

    this.movieSessionsService.getMovieSessionsBy(params)
      .subscribe(this.receiveMovieSessions);
  }

  deleteMovieSession(event, movieSession) {
    event.stopPropagation();
    this.movieSessionsService.deleteMovieSession(movieSession.id)
      .subscribe(() => this.getMovieSessions());
  }

  receiveMovieSessions(movieSessions: any) {
    this.movieSessions = movieSessions.data;
    this.totalItems = movieSessions.total;
    this.itemsLimit = movieSessions.limit;
    this.pages = movieSessions.pages;
  }

  handlePageChange({ page }): void {
    this.getMovieSessions({ page });
  }
}
