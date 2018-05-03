import { OnInit } from '@angular/core';
import { ITEMS_PER_PAGE } from '../../constants/lists-config';
import Service from '../service/Service';

abstract class List<T> implements Pageable, Sortable, OnInit {
  data: T[];
  service: Service<T>;

  info: string | null;
  error: string | null;
  serverError: string | null;

  defaultRequestParams = {};
  lastSearchCriteria = {};

  totalItems: number;
  itemsLimit: number;
  pages: number;
  page = 1;

  itemsPerPage = ITEMS_PER_PAGE;

  sortingOrder: object;
  defaultSortingOrder: object;

  ngOnInit(): void {
    this.sortingOrder = { ...this.defaultSortingOrder };

    this.onServerError = this.onServerError.bind(this);
    this.receiveData = this.receiveData.bind(this);
    this.getData = this.getData.bind(this);
    this.onItemsUpdate = this.onItemsUpdate.bind(this);

    this.getData();
  }

  getData(criteria?: any): void {
    const params = {
      page: this.page,
      limit: this.itemsPerPage,
      ...this.defaultRequestParams,
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
      .subscribe(this.onItemsUpdate, this.onServerError);
  }

  deleteItem(id: string): void {
    this.service.deleteOne(id)
      .subscribe(this.onItemsUpdate, this.onServerError);
  }

  updateItem(id: string, item: T) {
    this.service.update(id, item)
      .subscribe(this.onItemsUpdate, this.onServerError);
  }

  onItemsUpdate() {
    this.error = null;
    this.info = 'Updated successfully';
    this.getData();
  }

  onServerError(res): void {
    this.info = null;
    this.serverError = res.error.message;
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

export default List;
