import { Component, OnInit } from '@angular/core';
import {MovieSession} from '../movie-session';
import {MovieSessionService} from '../movie-session.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-session-details',
  templateUrl: './movie-session-details.component.html',
  styleUrls: ['./movie-session-details.component.scss']
})
export class MovieSessionDetailsComponent implements OnInit {
  movieSession: MovieSession;
  isMovieListShowed = false;
  isCinemaListShowed = false;

  constructor(
    private movieSessionService: MovieSessionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getMovieSession();
  }

  getMovieSession(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieSessionService.getMovieSessionById(id)
      .subscribe(movieSession => this.movieSession = movieSession);
  }

  updateMovieSession(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieSessionService.updateMovieSessions(id, this.movieSession)
      .subscribe();
  }

  toggleMovieList() {
    this.isMovieListShowed = !this.isMovieListShowed;
  }

  toggleCinemaList() {
    this.isCinemaListShowed = !this.isCinemaListShowed;
  }

  selectMovie(id: string) {
    this.movieSession.movieId = id;
  }

  selectCinema(id: string) {
    this.movieSession.cinemaId = id;
  }
}
