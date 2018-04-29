import { Component } from '@angular/core';
import { Cinema } from '../cinema';
import { CINEMAS_ROUTE } from '../../../constants/routes';
import List from '../../../classes/list/List';
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.scss']
})
export class CinemasComponent extends List<Cinema> {
  CINEMAS_ROUTE = CINEMAS_ROUTE;

  defaultSortingOrder = {
    name: 0,
    city: 0,
    roomsCount: 0
  };

  constructor(service: CinemaService) {
    super();
    this.service = service;
  }

  deleteCinema(event, id: string) {
    event.stopPropagation();
    this.deleteItem(id);
  }
}
