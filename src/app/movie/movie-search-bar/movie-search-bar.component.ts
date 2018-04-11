import { Component, EventEmitter, OnInit, OnDestroy, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-movie-search-bar',
  templateUrl: './movie-search-bar.component.html',
  styleUrls: ['./movie-search-bar.component.scss']
})
export class MovieSearchBarComponent implements OnInit, OnDestroy {
  @Output() moviesFoundEvent = new EventEmitter<Movie[]>();
  searchTitleControl = new FormControl();
  searchSubscription: Subscription;

  constructor(private movieService: MovieService) { }

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
      relevant: false,
      'match-title': value
    };
    this.movieService.getMoviesBy(params)
      .subscribe(movies => this.moviesFoundEvent.emit(movies));
  }
}
