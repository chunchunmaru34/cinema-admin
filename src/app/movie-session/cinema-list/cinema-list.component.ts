import { Component, EventEmitter, Output } from '@angular/core';

import { CinemaService } from '../../cinema/cinema.service';
import { Cinema } from '../../cinema/cinema';
import List from '../../../classes/list/List';
import * as sortingOrders from '../../../classes/list/constants/sorting-orders';
import * as symbols from '../../../classes/list/constants/sorting-symbols';
import { MAX_PAGINATION_SIZE } from '../../../constants/pagination';
import { ITEMS_PER_PAGE } from '../constants/mini-lists-config';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.scss']
})
export class CinemaListComponent extends List<Cinema> {
  @Output() cinemaSelectEvent = new EventEmitter<string>();

  MAX_PAGINATION_SIZE = MAX_PAGINATION_SIZE;

  sortingOrders = sortingOrders;
  symbols = symbols;

  constructor(cinemaService: CinemaService) {
    super();
    this.service = cinemaService;

    this.itemsPerPage = ITEMS_PER_PAGE;

    this.defaultSortingOrder = {
      name: sortingOrders.NO_SORTING,
      city: sortingOrders.NO_SORTING
    };
  }

  select(cinema) {
    this.cinemaSelectEvent.emit(cinema);
  }
}
