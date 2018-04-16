import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service';
import { Cinema } from '../cinema';
import { CINEMAS_ROUTE } from '../../../constants/routes';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.scss']
})
export class CinemasComponent implements OnInit {
  cinemas: Cinema[];

  pages: number;
  totalItems: number;
  itemsLimit: number;

  ITEMS_PER_PAGE = 4;

  lastSearchCriteria = {};

  CINEMAS_ROUTE = CINEMAS_ROUTE;

  constructor(private cinemaService: CinemaService) { }

  ngOnInit() {
    this.receiveCinemas = this.receiveCinemas.bind(this);
    this.getCinemas = this.getCinemas.bind(this);
    this.getCinemas();
  }

  getCinemas(criteria?: any): void {
    const params = {
      limit: this.ITEMS_PER_PAGE,
      ...this.lastSearchCriteria,
      ...criteria
    };
    this.lastSearchCriteria = params;

    this.cinemaService.getCinemasBy(params)
      .subscribe(this.receiveCinemas);
  }

  deleteCinema(event, id: string): void {
    event.stopPropagation();
    this.cinemaService.deleteCinema(id)
      .subscribe(() => this.getCinemas());
  }

  receiveCinemas(cinemas: any) {
    this.cinemas = cinemas.data;
    this.pages = cinemas.pages;
    this.totalItems = cinemas.total;
    this.itemsLimit = cinemas.limit;
  }

  handlePageChange({ page }): void {
    this.getCinemas({ page });
  }
}
