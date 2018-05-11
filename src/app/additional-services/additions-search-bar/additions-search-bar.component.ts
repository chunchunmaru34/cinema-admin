import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import SearchBar from '../../../classes/search-bar/SearchBar';

@Component({
  selector: 'app-additions-search-bar',
  templateUrl: './additions-search-bar.component.html',
  styleUrls: ['./additions-search-bar.component.scss']
})
export class AdditionsSearchBarComponent extends SearchBar {

  constructor() {
    super();
    this.searchForm = new FormGroup({
      name: new FormControl()
    });
  }

  onChange(values: any): void {
    const params = {
      matchName: values.name
    };

    this.handleChange(params);
  }
}
