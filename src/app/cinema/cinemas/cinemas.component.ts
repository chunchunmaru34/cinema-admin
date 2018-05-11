import { Component } from '@angular/core';
import { Cinema } from '../cinema';
import { CINEMAS_ROUTE } from '../../../constants/routes';
import List from '../../../classes/list/List';
import { CinemaService } from '../cinema.service';
import { NO_SORTING, ASCENDING, DESCENDING } from '../../../classes/list/constants/sorting-orders';
import { ASCENDING_SYMBOL, DESCENDING_SYMBOL } from '../../../classes/list/constants/sorting-symbols';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.scss']
})
export class CinemasComponent extends List<Cinema> {
  CINEMAS_ROUTE = CINEMAS_ROUTE;

  ASCENDING = ASCENDING;
  DESCENDING = DESCENDING;
  NO_SORTING = NO_SORTING;

  ASCENDING_SYMBOL = ASCENDING_SYMBOL;
  DESCENDING_SYMBOL = DESCENDING_SYMBOL;

  constructor(service: CinemaService) {
    super();
    this.service = service;
    this.defaultSortingOrder = {
      name: NO_SORTING,
      city: NO_SORTING,
      roomsCount: NO_SORTING
    };
  }

  deleteCinema(event, id: string) {
    event.stopPropagation();
    this.deleteItem(id);
  }
}
