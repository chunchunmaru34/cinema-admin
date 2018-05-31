import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {  AdditionsService } from '../../additional-services/additions.service';
import { MovieSessionAddition } from '../movie-sessions-addition';
import { Addition } from '../../additional-services/addition';
import List from '../../../classes/list/List';
import * as sortingOrders from '../../../classes/list/constants/sorting-orders';
import * as symbols from '../../../classes/list/constants/sorting-symbols';
import { MAX_PAGINATION_SIZE } from '../../../constants/pagination';
import { ITEMS_PER_PAGE } from '../constants/mini-lists-config';

@Component({
  selector: 'app-additions-list',
  templateUrl: './additions-list.component.html',
  styleUrls: ['./additions-list.component.scss']
})
export class AdditionsListComponent extends List<Addition> implements OnInit {
  // list of all possible additions
  additions: MovieSessionAddition[];
  // list of added to movieSession additions
  @Input() added: MovieSessionAddition[];

  @Output() addEvent = new EventEmitter<MovieSessionAddition>();
  @Output() removeEvent = new EventEmitter<MovieSessionAddition>();

  MAX_PAGINATION_SIZE = MAX_PAGINATION_SIZE;

  sortingOrders = sortingOrders;
  symbols = symbols;

  constructor(additionsService: AdditionsService) {
    super();
    this.service = additionsService;

    this.itemsPerPage = ITEMS_PER_PAGE;

    this.defaultSortingOrder = {
      name: sortingOrders.NO_SORTING,
    };
  }

  ngOnInit() {
    super.ngOnInit();
    this.prepareAdditions = this.prepareAdditions.bind(this);
  }

  prepareAdditions(additions): void {
    /*
        Checking for an already added additions and tagging them
        If additionalService is not added, returns object with 0 price without tagging
    */
    additions = additions.map(item => {
      const movieSessionAddition = this.added
        .find(elem => elem.additionalService.id === item.id);
      if (movieSessionAddition) {
        movieSessionAddition.additionalService.isAdded = true;
        return movieSessionAddition;
      } else {
        return new MovieSessionAddition(item, 0);
      }
    });
    this.additions = additions;
  }

  receiveData(response): void {
    super.receiveData(response);
    this.prepareAdditions(response.data);
  }

  add(sessionAddition: MovieSessionAddition): void {
    // check if it already added in array
    if (this.added
        .find(item => item.additionalService.id === sessionAddition.additionalService.id)) {
      return;
    }
    sessionAddition.additionalService.isAdded = true;
    this.addEvent.emit(sessionAddition);
    this.getData();
  }

  remove(sessionAddition: MovieSessionAddition): void {
    sessionAddition.additionalService.isAdded = false;
    this.removeEvent.emit(sessionAddition);
    this.getData();
  }
}
