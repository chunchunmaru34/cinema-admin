import { Component, EventEmitter, OnInit, OnDestroy, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-movie-search-bar',
  templateUrl: './movie-search-bar.component.html',
  styleUrls: ['./movie-search-bar.component.scss']
})
export class MovieSearchBarComponent implements OnInit, OnDestroy {
  @Output() searchMoviesEvent = new EventEmitter<any>();
  @Output() resetPageEvent = new EventEmitter<any>();

  searchTitleControl = new FormControl();
  searchSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.handleChange = this.handleChange.bind(this);
    this.searchSubscription = this.searchTitleControl.valueChanges
      .debounceTime(250)
      .subscribe(this.handleChange);
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }

  handleChange(value: string): void {
    const params = {
      'match-title': value,
    };

    this.searchMoviesEvent.emit(params);
    this.resetPageEvent.emit();
  }
}
