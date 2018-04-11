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

  MOVIE_SESSIONS_ROUTE = MOVIE_SESSIONS_ROUTE;
  CINEMAS_ROUTE = CINEMAS_ROUTE;
  MOVIES_ROUTE = MOVIES_ROUTE;

  constructor(private movieSessionsService: MovieSessionService) { }

  ngOnInit() {
    this.receiveMovieSessions = this.receiveMovieSessions.bind(this);
    this.getMovieSessions = this.getMovieSessions.bind(this);
    this.getMovieSessions();
  }

  getMovieSessions(): void {
    this.movieSessionsService.getMovieSessions()
      .subscribe(this.receiveMovieSessions);
  }

  deleteMovieSession(event, movieSession) {
    event.stopPropagation();
    this.movieSessionsService.deleteMovieSession(movieSession.id)
      .subscribe(this.getMovieSessions);
  }

  receiveMovieSessions(movieSessions: MovieSession[]) {
    this.movieSessions = movieSessions;
  }
}
