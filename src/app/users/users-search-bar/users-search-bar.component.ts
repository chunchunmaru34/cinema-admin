import { FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

import SearchBar from '../../../classes/search-bar/SearchBar';

@Component({
  selector: 'app-users-search-bar',
  templateUrl: './users-search-bar.component.html',
  styleUrls: ['./users-search-bar.component.scss']
})
export class UsersSearchBarComponent extends SearchBar {

  constructor() {
    super();

    this.searchForm = new FormGroup({
      email: new FormControl(),
      name: new FormControl()
    });
  }

  onChange(value: any): void {
    const params = {
      matchName: value.name,
      matchEmail: value.email
    };

    this.handleChange(params);
  }
}
