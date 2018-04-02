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
import {
  CINEMAS_ROUTE,
  MOVIE_SESSIONS_ROUTE,
  MOVIES_ROUTE,
} from '../../../constants/routes';
import {
  ERROR_FADING_TIMEOUT,
  INFO_FADING_TIMEOUT
} from '../../../constants/alerts-config';

@Component({
  selector: 'app-movie-session-details',
  templateUrl: './movie-session-details.component.html',
  styleUrls: ['./movie-session-details.component.scss']
})
export class MovieSessionDetailsComponent implements OnInit {
  movieSession: MovieSession = new MovieSession();

  CINEMAS_ROUTE = CINEMAS_ROUTE;
  MOVIES_ROUTE = MOVIES_ROUTE;

  isEditing: boolean;
  isMovieListHidden = true;
  isCinemaListHidden = true;
  isAdditionsListHidden = true;

  datepickerConfig = {
    containerClass: 'theme-red',
    dateInputFormat: 'DD-MM-YYYY'
  };

  info: string;
  error: string;
  timer: any;

  constructor(
    private movieSessionService: MovieSessionService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.handleSuccessfulUpdate = this.handleSuccessfulUpdate.bind(this);
    this.handleError = this.handleError.bind(this);
    this.isEditing = this.route.snapshot.paramMap.get('id') !== 'add';
    if (this.isEditing) {
      this.getMovieSession();
    }
  }

  getMovieSession(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieSessionService.getMovieSessionById(id)
      .subscribe(movieSession => this.movieSession = movieSession);
  }

  updateMovieSession(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieSessionService.updateMovieSessions(id, this.movieSession)
      .subscribe(
        this.handleSuccessfulUpdate,
        this.handleError,
      );
  }

  createMovieSession(): void {
    this.movieSessionService.createMovieSession(this.movieSession)
      .subscribe(
        () => this.router.navigate([MOVIE_SESSIONS_ROUTE]),
        this.handleError,
      );
  }

  onSaveClick(): void {
    this.isEditing ? this.updateMovieSession() : this.createMovieSession();
  }

  handleSuccessfulUpdate(): void {
    this.getMovieSession();
    clearTimeout(this.timer);
    this.error = null;
    this.info = MOVIE_SESSION_SUCCESSFUL_UPDATE_MESSAGE;
    this.timer = setTimeout(() => this.info = null, INFO_FADING_TIMEOUT);
  }

  handleError(httpError: HttpErrorResponse): void {
    this.info = null;
    this.error = httpError.error.message || MOVIE_SESSION_FAILED_UPDATE_MESSAGE;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.error = null, ERROR_FADING_TIMEOUT);
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
