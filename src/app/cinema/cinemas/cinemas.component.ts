import { Component } from '@angular/core';

import { Cinema } from '../cinema';
import { CINEMAS_ROUTE } from '../../../constants/routes';
import List from '../../../classes/list/List';
import { CinemaService } from '../cinema.service';
import * as sortingOrders from '../../../classes/list/constants/sorting-orders';
import * as symbols from '../../../classes/list/constants/sorting-symbols';
import { MAX_PAGINATION_SIZE } from '../../../constants/pagination';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.scss']
})
export class CinemasComponent extends List<Cinema> {
  CINEMAS_ROUTE = CINEMAS_ROUTE;

  MAX_PAGINATION_SIZE = MAX_PAGINATION_SIZE;

  sortingOrders = sortingOrders;
  symbols = symbols;

  constructor(service: CinemaService) {
    super();
    this.service = service;

    this.defaultSortingOrder = {
      name: sortingOrders.NO_SORTING,
      city: sortingOrders.NO_SORTING,
      roomsCount: sortingOrders.NO_SORTING
    };
  }

  deleteCinema(event, id: string) {
    event.stopPropagation();
    this.deleteItem(id);
  }
}
