import { OnInit } from '@angular/core';
import { ITEMS_PER_PAGE } from './constants/lists-config';
import { ASCENDING, DESCENDING, NO_SORTING } from './constants/sorting-orders';
import Service from '../service/Service';
import { Alert } from '../../app/util-components/alerts/Alert';
import { ALERT_DANGER, ALERT_INFO, ALERT_SUCCESS } from '../../app/util-components/alerts/constants/alert-types';
import { ITEM_CREATION_SUCCESS, ITEM_DELETION_SUCCESS, ITEM_UPDATING_SUCCESS } from './constants/alert-messages';

abstract class List<T> implements Pageable, Sortable, OnInit {
  data: T[];
  service: Service<T>;

  alerts: Alert[] = [];

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
    this.onItemsDelete = this.onItemsDelete.bind(this);
    this.onItemsCreate = this.onItemsCreate.bind(this);

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
      .subscribe(this.onItemsCreate, this.onServerError);
  }

  deleteItem(id: string): void {
    this.service.deleteOne(id)
      .subscribe(this.onItemsDelete, this.onServerError);
  }

  updateItem(id: string, item: T) {
    this.service.update(id, item)
      .subscribe(this.onItemsUpdate, this.onServerError);
  }

  onItemsCreate() {
    this.alerts.unshift(new Alert(ALERT_SUCCESS, ITEM_CREATION_SUCCESS));
    this.getData();
  }

  onItemsUpdate() {
    this.alerts.unshift(new Alert(ALERT_SUCCESS, ITEM_UPDATING_SUCCESS));
    this.getData();
  }

  onItemsDelete() {
    this.alerts.unshift(new Alert(ALERT_SUCCESS, ITEM_DELETION_SUCCESS));
    this.getData();
  }

  onServerError(res): void {
    this.alerts.unshift(new Alert(ALERT_DANGER, res.error.message));
  }

  alert(type: string, message: string) {
    this.alerts.unshift(new Alert(type, message));
  }

  alertInfo(message: string) {
    this.alerts.unshift(new Alert(ALERT_INFO, message));
  }

  alertSuccess(message: string) {
    this.alerts.unshift(new Alert(ALERT_SUCCESS, message));
  }

  alertError(message: string) {
    this.alerts.unshift(new Alert(ALERT_DANGER, message));
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

    const params: any = {};

    // sorting order change cycle:
    // -> no sort -> asc -> desc ->
    switch (this.sortingOrder[parameterName]) {
      case NO_SORTING:
        this.sortingOrder[parameterName] = ASCENDING;
        break;
      case ASCENDING:
        this.sortingOrder[parameterName] = DESCENDING;
        break;
      case DESCENDING:
        this.sortingOrder[parameterName] = NO_SORTING;
        params.sortBy = null;
        params.sortOrder = null;
        this.getData(params);
        return;
      default:
        this.sortingOrder[parameterName] = this.defaultSortingOrder[parameterName];
    }

    // Reset other sorting, because we can sort only by 1 param
    const sortingOrder = { ...this.defaultSortingOrder };
    sortingOrder[parameterName] =  this.sortingOrder[parameterName];
    this.sortingOrder = sortingOrder;

    params.sortBy = parameterName;
    params.sortOrder = this.sortingOrder[parameterName];

    this.getData(params);
  }
}

export default List;
