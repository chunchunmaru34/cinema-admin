import { EventEmitter, OnInit, OnDestroy, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

abstract class SearchBar implements OnInit, OnDestroy {
  @Output() searchEvent = new EventEmitter<any>();
  @Output() resetPageEvent = new EventEmitter<any>();

  searchForm: FormGroup;
  searchSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    this.onChange = this.onChange.bind(this);
    this.searchSubscription = this.searchForm.valueChanges
      .debounceTime(250)
      .subscribe(this.onChange);
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }

  handleChange(params: object): void {
    this.searchEvent.emit(params);
    this.resetPageEvent.emit(params);
  }

  abstract onChange(formValues: object): void;
}

export default SearchBar;
