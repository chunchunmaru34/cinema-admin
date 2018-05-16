import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { MovieSession } from '../movie-session';
import { MovieSessionService } from '../movie-session.service';
import { Movie } from '../../movie/movie';
import { Cinema } from '../../cinema/cinema';
import { MovieSessionAddition } from '../movie-sessions-addition';
import {
  MOVIE_SESSION_FAILED_UPDATE_MESSAGE,
  MOVIE_SESSION_SUCCESSFUL_UPDATE_MESSAGE
} from '../../../constants/alert-messages';
import * as routes from '../../../constants/routes';
import { Alert } from '../../util-components/alerts/Alert';
import { ALERT_DANGER, ALERT_SUCCESS } from '../../util-components/alerts/constants/alert-types';


@Component({
  selector: 'app-movie-session-details',
  templateUrl: './movie-session-details.component.html',
  styleUrls: ['./movie-session-details.component.scss']
})
export class MovieSessionDetailsComponent implements OnInit {
  movieSession: MovieSession = new MovieSession();

  routes = routes;

  isEditing: boolean;
  isMovieListHidden = true;
  isCinemaListHidden = true;
  isAdditionsListHidden = true;

  datepickerConfig = {
    containerClass: 'theme-red',
    dateInputFormat: 'DD-MM-YYYY'
  };

  alerts: Alert[] = [];

  constructor(
    private movieSessionService: MovieSessionService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.handleSuccessfulUpdate = this.handleSuccessfulUpdate.bind(this);
    this.handleError = this.handleError.bind(this);
    this.receiveMovieSession = this.receiveMovieSession.bind(this);

    this.isEditing = this.route.snapshot.paramMap.get('id') !== 'add';
    if (this.isEditing) {
      this.getMovieSession();
    }
  }

  getMovieSession(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieSessionService.getById(id)
      .subscribe(this.receiveMovieSession);
  }

  receiveMovieSession(movieSession): void {
    this.movieSession = movieSession;
  }

  updateMovieSession(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieSessionService.update(id, this.movieSession)
      .subscribe(
        this.handleSuccessfulUpdate,
        this.handleError,
      );
  }

  createMovieSession(): void {
    this.movieSessionService.create(this.movieSession)
      .subscribe(
        () => this.router.navigate([routes.MOVIE_SESSIONS_ROUTE]),
        this.handleError,
      );
  }

  onSaveClick(): void {
    this.isEditing ? this.updateMovieSession() : this.createMovieSession();
  }

  handleSuccessfulUpdate(): void {
    this.getMovieSession();
    this.alerts.unshift(
      new Alert(ALERT_SUCCESS, MOVIE_SESSION_SUCCESSFUL_UPDATE_MESSAGE)
    );
  }

  handleError(httpError: HttpErrorResponse): void {
    this.alerts.unshift(
      new Alert(ALERT_DANGER, httpError.error.message || MOVIE_SESSION_FAILED_UPDATE_MESSAGE)
    );
  }

  toggleMovieList(): void {
    this.isMovieListHidden = !this.isMovieListHidden;
  }

  toggleCinemaList(): void {
    this.isCinemaListHidden = !this.isCinemaListHidden;
  }

  toggleAdditionsList(): void {
    this.isAdditionsListHidden = !this.isAdditionsListHidden;
  }

  selectMovie(movie: Movie): void {
    this.movieSession.movie = movie;
    this.isMovieListHidden = true;
  }

  selectCinema(cinema: Cinema): void {
    this.movieSession.cinema = cinema;
    this.isCinemaListHidden = true;
  }

  pushAddition(addition: MovieSessionAddition): void {
    this.movieSession.additions.push(addition);
  }

  removeAddition(sessionAddition: MovieSessionAddition): void {
    const i = this.movieSession
      .additions.findIndex(item => item.addition.id === sessionAddition.addition.id);
    this.movieSession.additions.splice(i, 1);
  }
}
