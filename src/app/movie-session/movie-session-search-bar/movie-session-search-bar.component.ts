import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import SearchBar from '../../../classes/search-bar/SearchBar';

@Component({
  selector: 'app-movie-session-search-bar',
  templateUrl: './movie-session-search-bar.component.html',
  styleUrls: ['./movie-session-search-bar.component.scss']
})
export class MovieSessionSearchBarComponent extends SearchBar {
  constructor() {
    super();
    this.searchForm = new FormGroup({
      cinemaName: new FormControl(),
      movieTitle: new FormControl(),
      since: new FormControl(),
      to: new FormControl()
    });
  }

  onChange(value: any): void {
    const since = value.since && value.since.toISOString().split('T')[0];
    const to = value.to && value.to.toISOString().split('T')[0];

    const params = {
      'match-cinema-name': value.cinemaName,
      'match-movie-title': value.movieTitle,
      since,
      to
    };

    this.handleChange(params);
  }

}
