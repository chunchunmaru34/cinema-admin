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

  page: number;
  pages: number;
  totalItems: number;
  itemsLimit: number;

  ITEMS_PER_PAGE = 10;

  lastSearchCriteria = {};

  sortingOrder = {
    name: 0,
    city: 0,
    roomsCount: 0,
  };

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
    this.page = cinemas.page;
    this.pages = cinemas.pages;
    this.totalItems = cinemas.total;
    this.itemsLimit = cinemas.limit;
  }

  handlePageChange({ page }): void {
    this.getCinemas({ page });
  }

  sort(parameterName: string): void {
    this.sortingOrder[parameterName] = -this.sortingOrder[parameterName];
    if (this.sortingOrder[parameterName] === 1) {
      this.sortingOrder[parameterName] = 0;
      this.getCinemas({ 'sort-by': null, 'sort-order': null });
      return;
    }
    if (!this.sortingOrder[parameterName]) {
      this.sortingOrder[parameterName] = 1;
    }

    // Reset other sorting, because we can sort only by 1 param
    const sortingOrder = {
      name: 0,
      city: 0,
      roomsCount: 0,
    };
    sortingOrder[parameterName] =  this.sortingOrder[parameterName];
    this.sortingOrder = sortingOrder;

    const params = {
      'sort-by': parameterName,
      'sort-order': this.sortingOrder[parameterName]
    };

    this.getCinemas(params);
  }
}
