import { Component, OnInit } from '@angular/core';
import { MovieSession } from '../movie-session';
import { MovieSessionService } from '../movie-session.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-session-details',
  templateUrl: './movie-session-details.component.html',
  styleUrls: ['./movie-session-details.component.scss']
})
export class MovieSessionDetailsComponent implements OnInit {
  movieSession: MovieSession = new MovieSession();
  isEditing: boolean;
  isMovieListShowed = false;
  isCinemaListShowed = false;

  constructor(
    private movieSessionService: MovieSessionService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
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
      .subscribe();
  }

  createMovieSession(): void {
    this.movieSessionService.createMovieSession(this.movieSession)
      .subscribe(() => this.router.navigate(['/movie-sessions']));
  }

  toggleMovieList() {
    this.isMovieListShowed = !this.isMovieListShowed;
  }

  toggleCinemaList() {
    this.isCinemaListShowed = !this.isCinemaListShowed;
  }

  onSaveClick() {
    this.isEditing ? this.updateMovieSession() : this.createMovieSession();
  }

  selectMovie(id: string) {
    this.movieSession.movieId = id;
    this.isMovieListShowed = false;
  }

  selectCinema(id: string) {
    this.movieSession.cinemaId = id;
    this.isCinemaListShowed = false;
  }
}
