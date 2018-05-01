import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import SearchBar from '../../../classes/search-bar/SearchBar';

@Component({
  selector: 'app-movie-search-bar',
  templateUrl: './movie-search-bar.component.html',
  styleUrls: ['./movie-search-bar.component.scss']
})
export class MovieSearchBarComponent extends SearchBar {
  constructor() {
    super();
    this.searchForm = new FormGroup({
      title: new FormControl()
    });
  }

  onChange(value: any): void {
    const params = {
      'match-title': value.title,
    };

    this.handleChange(params);
  }
}
