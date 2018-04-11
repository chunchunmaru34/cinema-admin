import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { MovieSession } from '../movie-session';
import { MovieSessionService } from '../movie-session.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-session-search-bar',
  templateUrl: './movie-session-search-bar.component.html',
  styleUrls: ['./movie-session-search-bar.component.scss']
})
export class MovieSessionSearchBarComponent implements OnInit {
  @Output() movieSessionsFoundEvent = new EventEmitter<MovieSession[]>();

  searchForm = new FormGroup({
    cinemaName: new FormControl(),
    movieTitle: new FormControl(),
    since: new FormControl(),
    to: new FormControl()
  });

  constructor(private movieSessionService: MovieSessionService) { }

  ngOnInit() {
    this.handleChange = this.handleChange.bind(this);
    this.searchForm.valueChanges
      .debounceTime(250)
      .subscribe(this.handleChange);
  }

  handleChange(value: any): void {
    const params = {
      relevant: false,
      'match-cinema-name': value.cinemaName,
      'match-movie-title': value.movieTitle,
      since: value.since,
      to: value.to
    };
    this.movieSessionService.getMovieSessionsBy(params)
      .subscribe(movieSessions => this.movieSessionsFoundEvent.emit(movieSessions));
  }

}
