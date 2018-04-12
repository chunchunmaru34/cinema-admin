import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieSession } from '../movie-session';
import { MovieSessionService } from '../movie-session.service';

@Component({
  selector: 'app-movie-session-search-bar',
  templateUrl: './movie-session-search-bar.component.html',
  styleUrls: ['./movie-session-search-bar.component.scss']
})
export class MovieSessionSearchBarComponent implements OnInit, OnDestroy {
  @Output() movieSessionsFoundEvent = new EventEmitter<MovieSession[]>();

  searchForm = new FormGroup({
    cinemaName: new FormControl(),
    movieTitle: new FormControl(),
    since: new FormControl(),
    to: new FormControl()
  });
  searchSubscription: Subscription;

  constructor(private movieSessionService: MovieSessionService) { }

  ngOnInit() {
    this.handleChange = this.handleChange.bind(this);
    this.searchSubscription = this.searchForm.valueChanges
      .debounceTime(250)
      .subscribe(this.handleChange);
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }

  handleChange(value: any): void {
    const since = value.since && value.since.toISOString().split('T')[0];
    const to = value.to && value.to.toISOString().split('T')[0];

    const params = {
      relevant: false,
      'match-cinema-name': value.cinemaName,
      'match-movie-title': value.movieTitle,
      since,
      to
    };
    Object.keys(params).forEach((key) => {
      if (!params[key]) {
        delete params[key];
      }
    });

    this.movieSessionService.getMovieSessionsBy(params)
      .subscribe(movieSessions => this.movieSessionsFoundEvent.emit(movieSessions));
  }

}
