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
import { MOVIE_SESSIONS_ROUTE } from '../../../constants/routes';

@Component({
  selector: 'app-movie-session-details',
  templateUrl: './movie-session-details.component.html',
  styleUrls: ['./movie-session-details.component.scss']
})
export class MovieSessionDetailsComponent implements OnInit {
  movieSession: MovieSession = new MovieSession();

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

  ERROR_FADING_TIMEOUT = 5000;
  INFO_FADING_TIMEOUT = 3000;

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

  onSaveClick() {
    this.isEditing ? this.updateMovieSession() : this.createMovieSession();
  }

  handleSuccessfulUpdate() {
    this.getMovieSession();
    clearTimeout(this.timer);
    this.error = null;
    this.info = MOVIE_SESSION_SUCCESSFUL_UPDATE_MESSAGE;
    this.timer = setTimeout(() => this.info = null, this.INFO_FADING_TIMEOUT);
  }

  handleError(httpError: HttpErrorResponse) {
    this.info = null;
    this.error = httpError.error.message || MOVIE_SESSION_FAILED_UPDATE_MESSAGE;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.error = null, this.ERROR_FADING_TIMEOUT);
  }

  toggleMovieList() {
    this.isMovieListHidden = !this.isMovieListHidden;
  }

  toggleCinemaList() {
    this.isCinemaListHidden = !this.isCinemaListHidden;
  }

  toggleAdditionsList() {
    this.isAdditionsListHidden = !this.isAdditionsListHidden;
  }

  selectMovie(movie: Movie) {
    this.movieSession.movie = movie;
    this.isMovieListHidden = true;
  }

  selectCinema(cinema: Cinema) {
    this.movieSession.cinema = cinema;
    this.isCinemaListHidden = true;
  }

  pushAddition(addition: MovieSessionAddition) {
    this.movieSession.additions.push(addition);
  }

  removeAddition(sessionAddition: MovieSessionAddition) {
    const i = this.movieSession
      .additions.findIndex(item => item.addition.id === sessionAddition.addition.id);
    this.movieSession.additions.splice(i, 1);
  }
}
