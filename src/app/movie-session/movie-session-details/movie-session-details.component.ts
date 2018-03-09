import { Component, OnInit } from '@angular/core';
import { MovieSession } from '../movie-session';
import { ActivatedRoute } from '@angular/router';
import { MovieSessionService } from '../movie-session.service';

@Component({
  selector: 'app-movie-session-details',
  templateUrl: './movie-session-details.component.html',
  styleUrls: ['./movie-session-details.component.scss']
})
export class MovieSessionDetailsComponent implements OnInit {
  movieSession: MovieSession;

  constructor(
    private movieSessionService: MovieSessionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getMovieSession()
  }

  getMovieSession(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieSessionService.getMovieSessionById(id)
      .subscribe(movieSession => this.movieSession = movieSession)
}
}
