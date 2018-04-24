import { Component, OnInit } from '@angular/core';
import { MovieSession } from '../movie-session';
import { MovieSessionService } from '../movie-session.service';
import {
  MOVIE_SESSIONS_ROUTE,
  MOVIES_ROUTE,
  CINEMAS_ROUTE
} from '../../../constants/routes';
import { ITEMS_PER_PAGE } from '../../../constants/lists-config';

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
  page = 1;

  lastSearchCriteria = {};

  sortingOrder: object;
  defaultSortingOrder = {
    date: 0,
  };

  ITEMS_PER_PAGE = ITEMS_PER_PAGE;

  MOVIE_SESSIONS_ROUTE = MOVIE_SESSIONS_ROUTE;
  CINEMAS_ROUTE = CINEMAS_ROUTE;
  MOVIES_ROUTE = MOVIES_ROUTE;

  constructor(private movieSessionsService: MovieSessionService) { }

  ngOnInit() {
    this.sortingOrder = { ...this.defaultSortingOrder };

    this.receiveMovieSessions = this.receiveMovieSessions.bind(this);
    this.getMovieSessions = this.getMovieSessions.bind(this);

    this.getMovieSessions();
  }

  getMovieSessions(criteria?: any): void {
    const params = {
      relevant: false,
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
    if (this.page !== movieSessions.page) {
      return;
    }
    this.movieSessions = movieSessions.data;
    this.totalItems = movieSessions.total;
    this.itemsLimit = movieSessions.limit;
    this.pages = movieSessions.pages;
  }

  handlePageChange({ page }): void {
    this.page = page;
    this.getMovieSessions({ page });
  }

  resetPage(): void {
    this.page = 1;
  }

  sort(parameterName: string): void {
    // Reset page to 1 after sorting
    this.resetPage();
    const params = {
      page: 1,
    };

    switch (this.sortingOrder[parameterName]) {
      case 0:
        this.sortingOrder[parameterName] = 1;
        break;
      case 1:
        this.sortingOrder[parameterName] = -1;
        break;
      case -1:
        this.sortingOrder[parameterName] = 0;
        params['sort-by'] = null;
        params['sort-order'] = null;
        break;
      default:
        this.sortingOrder[parameterName] = this.defaultSortingOrder[parameterName];
    }

    // Reset other sorting, because we can sort only by 1 param
    const sortingOrder = { ...this.defaultSortingOrder };
    sortingOrder[parameterName] =  this.sortingOrder[parameterName];
    this.sortingOrder = sortingOrder;

    params['sort-by'] = parameterName;
    params['sort-order'] = this.sortingOrder[parameterName];

    this.getMovieSessions(params);
  }
}
