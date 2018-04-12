import { Component, EventEmitter, OnInit, OnDestroy, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Cinema } from '../cinema';
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-cinema-search-bar',
  templateUrl: './cinema-search-bar.component.html',
  styleUrls: ['./cinema-search-bar.component.scss']
})
export class CinemaSearchBarComponent implements OnInit, OnDestroy {
  @Output() cinemasFoundEvent = new EventEmitter<Cinema[]>();

  searchForm = new FormGroup({
    name: new FormControl(),
    city: new FormControl(),
  });

  searchSubscription: Subscription;

  constructor(private cinemaService: CinemaService) {}

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
    const params = {
      relevant: false,
      'match-name': value.name,
      'match-city': value.city,
    };
    Object.keys(params).forEach((key) => {
      if (!params[key]) {
        delete params[key];
      }
    });

    this.cinemaService.getCinemasBy(params)
      .subscribe(cinemas => this.cinemasFoundEvent.emit(cinemas));
  }

}
