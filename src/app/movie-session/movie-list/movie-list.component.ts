import { Component, EventEmitter, Output } from '@angular/core';
import { MovieService } from '../../movie/movie.service';
import { Movie } from '../../movie/movie';
import List from '../../../classes/list/List';
import { MAX_PAGINATION_SIZE } from '../../../constants/pagination';
import { NO_SORTING, ASCENDING, DESCENDING } from '../../../classes/list/constants/sorting-orders';
import { ASCENDING_SYMBOL, DESCENDING_SYMBOL } from '../../../classes/list/constants/sorting-symbols';
import { ITEMS_PER_PAGE } from '../constants/mini-lists-config';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent extends List<Movie> {
  @Output() movieSelectEvent = new EventEmitter<string>();

  ASCENDING = ASCENDING;
  DESCENDING = DESCENDING;
  NO_SORTING = NO_SORTING;

  ASCENDING_SYMBOL = ASCENDING_SYMBOL;
  DESCENDING_SYMBOL = DESCENDING_SYMBOL;

  MAX_PAGINATION_SIZE = MAX_PAGINATION_SIZE;

  constructor(movieService: MovieService) {
    super();
    this.service = movieService;
    this.defaultSortingOrder = {
      title: NO_SORTING
    };
    this.itemsPerPage = ITEMS_PER_PAGE;
  }

  select(movie): void {
    this.movieSelectEvent.emit(movie);
  }
}
