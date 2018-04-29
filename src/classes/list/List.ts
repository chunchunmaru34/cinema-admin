import { OnInit } from '@angular/core';
import { ITEMS_PER_PAGE } from '../../constants/lists-config';
import Service from '../service/Service';

export default class List<T> implements Pageable, Sortable, OnInit {
  data: T[];
  service: Service<T>;

  lastSearchCriteria = {};

  totalItems: number;
  itemsLimit: number;
  pages: number;
  page = 1;

  ITEMS_PER_PAGE = ITEMS_PER_PAGE;

  sortingOrder: object;
  defaultSortingOrder: object;

  ngOnInit(): void {
    this.sortingOrder = { ...this.defaultSortingOrder };

    this.receiveData = this.receiveData.bind(this);
    this.getData = this.getData.bind(this);
    this.onItemsUpdate = this.onItemsUpdate.bind(this);

    this.getData();
  }

  getData(criteria?: any): void {
    const params = {
      relevant: false,
      page: this.page,
      limit: this.ITEMS_PER_PAGE,
      ...this.lastSearchCriteria,
      ...criteria
    };
    this.lastSearchCriteria = params;

    this.service.getAllBy(params)
      .subscribe(this.receiveData);
  }

  receiveData(response): void {
    if (this.page !== response.page) {
      return;
    }
    this.data = response.data;
    this.totalItems = response.total;
    this.itemsLimit = response.limit;
    this.pages = response.pages;
  }

  createItem(item: T): void {
    this.service.create(item)
      .subscribe(this.onItemsUpdate);
  }

  deleteItem(id: string): void {
    this.service.deleteOne(id)
      .subscribe(this.onItemsUpdate);
  }

  updateItem(id: string, item: T) {
    this.service.update(id, item)
      .subscribe(this.onItemsUpdate);
  }

  onItemsUpdate() {
    this.getData();
  }

  resetPage() {
    this.page = 1;
  }

  handlePageChange({ page }) {
    this.page = page;
    this.getData({ page });
  }

  sort(parameterName: string) {
    // Reset page to 1 after sorting
    this.resetPage();

    const params = {};

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
        this.getData(params);
        return;
      default:
        this.sortingOrder[parameterName] = this.defaultSortingOrder[parameterName];
    }

    // Reset other sorting, because we can sort only by 1 param
    const sortingOrder = { ...this.defaultSortingOrder };
    sortingOrder[parameterName] =  this.sortingOrder[parameterName];
    this.sortingOrder = sortingOrder;

    params['sort-by'] = parameterName;
    params['sort-order'] = this.sortingOrder[parameterName];

    this.getData(params);
  }
}
