import { Component } from '@angular/core';

import { AdditionsService} from './additions.service';
import { Addition } from './addition';
import List from '../../classes/list/List';
import * as sortingOrders from '../../classes/list/constants/sorting-orders';
import * as symbols from '../../classes/list/constants/sorting-symbols';
import { MAX_PAGINATION_SIZE } from '../../constants/pagination';
import { NAME_MUST_BE_UNIQUE_ERROR, NAME_MUST_NOT_BE_EMPTY_ERROR } from '../../constants/alert-messages';

@Component({
  selector: 'app-additions',
  templateUrl: './additions.component.html',
  styleUrls: ['./additions.component.scss']
})
export class AdditionsComponent extends List<Addition> {
  newAddition: string;

  MAX_PAGINATION_SIZE = MAX_PAGINATION_SIZE;

  sortingOrders = sortingOrders;
  symbols = symbols;

  constructor(additionsService: AdditionsService) {
    super();
    this.service = additionsService;
    this.defaultSortingOrder = {
      name: sortingOrders.NO_SORTING,
    };
  }

  onCreate(name: string): void {
    const isUnique = !this.data.find(item => item.name === name);

    if (!isUnique) {
      this.alertError(NAME_MUST_BE_UNIQUE_ERROR);
      return;
    }
    if (!name) {
      this.alertError(NAME_MUST_NOT_BE_EMPTY_ERROR);
      return;
    }

    this.createItem(new Addition(name));
  }

  toggleEdit(addition): void {
    addition.isEditing = true;
  }

  onEdit(addition): void {
    // if duplicates count is more than 1 then item is not unique
    const repetitions = this.data.reduce((count, item) => {
        if (item.name === addition.name) {
          return count + 1;
        } else {
          return count;
        }
      }, 0);
    const isUnique = repetitions === 1;

    if (!isUnique) {
      this.alertError(NAME_MUST_BE_UNIQUE_ERROR);
      return;
    }

    this.updateItem(addition.id, addition);
  }
}
