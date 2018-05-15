import { Component, EventEmitter, Output } from '@angular/core';

import { MovieService } from '../../movie/movie.service';
import { Movie } from '../../movie/movie';
import List from '../../../classes/list/List';
import { MAX_PAGINATION_SIZE } from '../../../constants/pagination';
import * as sortingOrders from '../../../classes/list/constants/sorting-orders';
import * as symbols from '../../../classes/list/constants/sorting-symbols';
import { ITEMS_PER_PAGE } from '../constants/mini-lists-config';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent extends List<Movie> {
  @Output() movieSelectEvent = new EventEmitter<string>();

  sortingOrders = sortingOrders;
  symbols = symbols;

  MAX_PAGINATION_SIZE = MAX_PAGINATION_SIZE;

  constructor(movieService: MovieService) {
    super();
    this.service = movieService;

    this.defaultSortingOrder = {
      title: sortingOrders.NO_SORTING
    };

    this.itemsPerPage = ITEMS_PER_PAGE;
  }

  select(movie): void {
    this.movieSelectEvent.emit(movie);
  }
}
