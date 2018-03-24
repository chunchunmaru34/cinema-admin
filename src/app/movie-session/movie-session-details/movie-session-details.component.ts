import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieSession } from '../movie-session';
import { MovieSessionService } from '../movie-session.service';
import { Movie } from '../../movie/movie';
import { Cinema } from '../../cinema/cinema';
import { Addition } from '../../additional-services/addition';

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

  constructor(
    private movieSessionService: MovieSessionService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.getMovieSession = this.getMovieSession.bind(this);
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
      .subscribe(this.getMovieSession);
  }

  createMovieSession(): void {
    this.movieSessionService.createMovieSession(this.movieSession)
      .subscribe(() => this.router.navigate(['/movie-sessions']));
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

  onSaveClick() {
    this.isEditing ? this.updateMovieSession() : this.createMovieSession();
  }

  selectMovie(movie: Movie) {
    this.movieSession.movie = movie;
    this.isMovieListHidden = true;
  }

  selectCinema(cinema: Cinema) {
    this.movieSession.cinema = cinema;
    this.isCinemaListHidden = true;
  }

  pushAddition(addition: Addition) {
    this.movieSession.additions.push(addition);
  }

  removeAddition(addition: Addition) {
    const i = this.movieSession.additions.findIndex(item => item.id === addition.id);
    this.movieSession.additions.splice(i, 1);
  }
}
