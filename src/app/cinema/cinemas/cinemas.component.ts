import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service';
import { Cinema } from '../cinema';
import { CINEMAS_ROUTE } from '../../../constants/routes';
import { ITEMS_PER_PAGE } from '../../../constants/lists-config';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.scss']
})
export class CinemasComponent implements OnInit {
  cinemas: Cinema[];

  page = 1;
  pages: number;
  totalItems: number;
  itemsLimit: number;

  ITEMS_PER_PAGE = ITEMS_PER_PAGE;

  lastSearchCriteria = {};

  sortingOrder: object;
  defaultSortingOrder = {
    name: 0,
    city: 0,
    roomsCount: 0,
  };

  CINEMAS_ROUTE = CINEMAS_ROUTE;

  constructor(private cinemaService: CinemaService) { }

  ngOnInit() {
    this.sortingOrder = { ...this.defaultSortingOrder };

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
    if (this.page !== cinemas.page) {
      return;
    }
    this.cinemas = cinemas.data;
    this.pages = cinemas.pages;
    this.totalItems = cinemas.total;
    this.itemsLimit = cinemas.limit;
  }

  handlePageChange({ page }): void {
    this.page = page;
    this.getCinemas({ page });
  }

  resetPage(): void {
    this.page = 1;
  }

  sort(parameterName: string): void {
    // Reset page to 1 after sorting
    const params = {
      page: 1,
    };

    switch (this.sortingOrder[parameterName]) {
      case 0:
        this.sortingOrder[parameterName] = 1;
        break;
      case 1:
        this.sortingOrder[parameterName] = -1;
        break;
      case -1:
        this.sortingOrder[parameterName] = 0;
        params['sort-by'] = null;
        params['sort-order'] = null;
        break;
      default:
        this.sortingOrder[parameterName] = this.defaultSortingOrder[parameterName];
    }

    // Reset other sorting, because we can sort only by 1 param
    const sortingOrder = { ...this.defaultSortingOrder };
    sortingOrder[parameterName] =  this.sortingOrder[parameterName];
    this.sortingOrder = sortingOrder;

    params['sort-by'] = parameterName;
    params['sort-order'] = this.sortingOrder[parameterName];

    this.getCinemas(params);
  }
}
