import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { MOVIES_ROUTE } from '../../../constants/routes';
import {
  MOVIE_FAILED_UPDATE_MESSAGE,
  MOVIE_SUCCESSFUL_UPDATE_MESSAGE
} from '../../../constants/alert-messages';
import { Alert } from '../../util-components/alerts/Alert';
import { ALERT_SUCCESS, ALERT_DANGER } from '../../util-components/alerts/constants/alert-types';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})

export class MovieDetailsComponent implements OnInit {
  movie: Movie = new Movie();
  isEditing: boolean;
  POSTER_PLACEHOLDER_URL = 'http://via.placeholder.com/400x500';
  datepickerConfig = {
    containerClass: 'theme-red',
    dateInputFormat: 'DD-MM-YYYY'
  };

  alerts: Alert[] = [];

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.handleSuccessfulUpdate = this.handleSuccessfulUpdate.bind(this);
    this.handleError = this.handleError.bind(this);
    this.isEditing = this.route.snapshot.paramMap.get('id') !== 'add';
    if (this.isEditing) {
      this.getMovie();
    }
  }

  prepareMovie(movie): void {
    movie.startShowDate = new Date(movie.startShowDate);
    movie.endShowDate = new Date(movie.endShowDate);
    this.movie = movie;
  }

  getMovie(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getById(id)
      .subscribe(movie => this.prepareMovie(movie));
  }

  onSave() {
    this.isEditing ? this.updateMovie() : this.saveMovie();
  }

  saveMovie(): void {
    this.movieService.create(this.movie)
      .subscribe(
        () => this.router.navigate([MOVIES_ROUTE]),
        this.handleError,
      );
  }

  updateMovie(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.update(id, this.movie)
      .subscribe(
        this.handleSuccessfulUpdate,
        this.handleError,
      );
  }

  handleSuccessfulUpdate(): void {
    this.getMovie();
    this.alerts.unshift(new Alert(ALERT_SUCCESS, MOVIE_SUCCESSFUL_UPDATE_MESSAGE));
  }

  handleError(httpError: HttpErrorResponse): void {
    this.alerts.unshift(
      new Alert(ALERT_DANGER,  httpError.error.message || MOVIE_FAILED_UPDATE_MESSAGE)
    );
  }
}
