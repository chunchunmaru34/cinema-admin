import { Component, EventEmitter, Output } from '@angular/core';
import { CinemaService } from '../../cinema/cinema.service';
import { Cinema } from '../../cinema/cinema';
import List from '../../../classes/list/List';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.scss']
})
export class CinemaListComponent extends List<Cinema> {
  @Output() cinemaSelectEvent = new EventEmitter<string>();

  constructor(cinemaService: CinemaService) {
    super();
    this.service = cinemaService;
    this.itemsPerPage = 4;
    this.defaultSortingOrder = {
      name: 0,
      city: 0
    };
  }

  select(cinema) {
    this.cinemaSelectEvent.emit(cinema);
  }
}
