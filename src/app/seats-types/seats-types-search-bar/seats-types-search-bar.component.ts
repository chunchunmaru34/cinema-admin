import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import SearchBar from '../../../classes/search-bar/SearchBar';

@Component({
  selector: 'app-seats-types-search-bar',
  templateUrl: './seats-types-search-bar.component.html',
  styleUrls: ['./seats-types-search-bar.component.scss']
})
export class SeatsTypesSearchBarComponent extends SearchBar {

  constructor() {
    super();
    this.searchForm = new FormGroup({
      displayName: new FormControl()
    });
  }

  onChange(values): void {
    const params = {
      matchDisplayName: values.displayName,
    };

    this.handleChange(params);
  }

}
