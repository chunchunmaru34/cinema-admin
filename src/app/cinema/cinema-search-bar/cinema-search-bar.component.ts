import { Component, EventEmitter, OnInit, OnDestroy, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  searchNameControl = new FormControl();
  searchCityControl = new FormControl();

  searchNameSubscription: Subscription;
  searchCitySubscription: Subscription;

  constructor(private cinemaService: CinemaService) {}

  ngOnInit() {
    this.handleChange = this.handleChange.bind(this);
    this.searchNameSubscription = this.searchNameControl.valueChanges
      .debounceTime(250)
      .subscribe(this.handleChange);
    this.searchCitySubscription = this.searchCityControl.valueChanges
      .debounceTime(250)
      .subscribe(this.handleChange);
  }

  ngOnDestroy() {
    this.searchCitySubscription.unsubscribe();
    this.searchNameSubscription.unsubscribe();
  }

  handleChange(): void {
    const params = {
      relevant: false,
      'match-name': this.searchNameControl.value,
      'match-city': this.searchCityControl.value,
    };
    this.cinemaService.getCinemasBy(params)
      .subscribe(cinemas => this.cinemasFoundEvent.emit(cinemas));
  }

}
