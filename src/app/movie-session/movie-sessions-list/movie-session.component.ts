import { Component } from '@angular/core';

import { MovieSession } from '../movie-session';
import { MovieSessionService } from '../movie-session.service';
import * as routes from '../../../constants/routes';
import * as sortingOrders from '../../../classes/list/constants/sorting-orders';
import * as symbols from '../../../classes/list/constants/sorting-symbols';
import { MAX_PAGINATION_SIZE } from '../../../constants/pagination';
import List from '../../../classes/list/List';

@Component({
  selector: 'app-movie-session',
  templateUrl: './movie-session.component.html',
  styleUrls: ['./movie-session.component.scss']
})
export class MovieSessionComponent extends List<MovieSession> {
  routes = routes;

  MAX_PAGINATION_SIZE = MAX_PAGINATION_SIZE;

  sortingOrders = sortingOrders;
  symbols = symbols;

  constructor(movieSessionsService: MovieSessionService) {
    super();
    this.service = movieSessionsService;


    this.defaultSortingOrder = {
      date: sortingOrders.NO_SORTING,
    };
    this.defaultRequestParams = {
      relevant: false
    };
  }

  deleteMovieSession(event, id: string) {
    event.stopPropagation();
    this.deleteItem(id);
  }
}
