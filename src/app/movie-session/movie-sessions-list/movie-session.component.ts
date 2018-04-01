import { Component, OnInit } from '@angular/core';
import { MovieSession } from '../movie-session';
import { MovieSessionService } from '../movie-session.service';

@Component({
  selector: 'app-movie-session',
  templateUrl: './movie-session.component.html',
  styleUrls: ['./movie-session.component.scss']
})
export class MovieSessionComponent implements OnInit {
  movieSessions: MovieSession[];

  constructor(private movieSessionsService: MovieSessionService) { }

  ngOnInit() {
    this.getMovieSessions = this.getMovieSessions.bind(this);
    this.getMovieSessions();
  }

  getMovieSessions(): void {
    this.movieSessionsService.getMovieSessions()
      .subscribe((movieSessions) => this.movieSessions = movieSessions);
  }

  deleteMovieSession(movieSession) {
    this.movieSessionsService.deleteMovieSession(movieSession.id)
      .subscribe(this.getMovieSessions);
  }
}
