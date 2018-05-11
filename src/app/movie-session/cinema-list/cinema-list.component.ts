import { Component, EventEmitter, Output } from '@angular/core';
import { CinemaService } from '../../cinema/cinema.service';
import { Cinema } from '../../cinema/cinema';
import List from '../../../classes/list/List';
import { NO_SORTING, ASCENDING, DESCENDING } from '../../../classes/list/constants/sorting-orders';
import { ASCENDING_SYMBOL, DESCENDING_SYMBOL } from '../../../classes/list/constants/sorting-symbols';
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

  ASCENDING = ASCENDING;
  DESCENDING = DESCENDING;
  NO_SORTING = NO_SORTING;

  ASCENDING_SYMBOL = ASCENDING_SYMBOL;
  DESCENDING_SYMBOL = DESCENDING_SYMBOL;

  constructor(cinemaService: CinemaService) {
    super();
    this.service = cinemaService;
    this.itemsPerPage = ITEMS_PER_PAGE;
    this.defaultSortingOrder = {
      name: NO_SORTING,
      city: NO_SORTING
    };
  }

  select(cinema) {
    this.cinemaSelectEvent.emit(cinema);
  }
}
