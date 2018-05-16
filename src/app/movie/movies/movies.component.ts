import { Component } from '@angular/core';

import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { MOVIES_ROUTE } from '../../../constants/routes';
import List from '../../../classes/list/List';
import * as sortingOrders from '../../../classes/list/constants/sorting-orders';
import * as symbols from '../../../classes/list/constants/sorting-symbols';
import { MAX_PAGINATION_SIZE } from '../../../constants/pagination';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent extends List<Movie> {
  MOVIES_ROUTE = MOVIES_ROUTE;

  MAX_PAGINATION_SIZE = MAX_PAGINATION_SIZE;

  sortingOrders = sortingOrders;
  symbols = symbols;

  constructor(movieService: MovieService) {
    super();
    this.service = movieService;

    this.defaultSortingOrder = {
      title: sortingOrders.NO_SORTING,
      startShowDate: sortingOrders.NO_SORTING,
      endShowDate: sortingOrders.NO_SORTING,
    };
  }

  deleteMovie(event, id: string) {
    event.stopPropagation();
    this.deleteItem(id);
  }
}
