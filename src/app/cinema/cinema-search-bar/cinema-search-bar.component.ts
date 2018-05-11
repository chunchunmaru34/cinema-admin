import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import SearchBar from '../../../classes/search-bar/SearchBar';

@Component({
  selector: 'app-cinema-search-bar',
  templateUrl: './cinema-search-bar.component.html',
  styleUrls: ['./cinema-search-bar.component.scss']
})
export class CinemaSearchBarComponent extends SearchBar {
  constructor() {
    super();
    this.searchForm = new FormGroup({
      name: new FormControl(),
      city: new FormControl(),
    });
  }

  onChange(value: any): void {
    const params = {
      'match-name': value.name,
      'match-city': value.city,
    };

    this.handleChange(params);
  }

}
