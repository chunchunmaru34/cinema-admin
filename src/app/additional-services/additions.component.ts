import { Component } from '@angular/core';
import { AdditionsService} from './additions.service';
import { Addition } from './addition';
import List from '../../classes/list/List';
import { NO_SORTING, ASCENDING, DESCENDING } from '../../classes/list/constants/sorting-orders';
import { ASCENDING_SYMBOL, DESCENDING_SYMBOL } from '../../classes/list/constants/sorting-symbols';
import { MAX_PAGINATION_SIZE } from '../../constants/pagination';

@Component({
  selector: 'app-additions',
  templateUrl: './additions.component.html',
  styleUrls: ['./additions.component.scss']
})
export class AdditionsComponent extends List<Addition> {
  newAddition: string;

  MAX_PAGINATION_SIZE = MAX_PAGINATION_SIZE;

  ASCENDING = ASCENDING;
  DESCENDING = DESCENDING;
  NO_SORTING = NO_SORTING;

  ASCENDING_SYMBOL = ASCENDING_SYMBOL;
  DESCENDING_SYMBOL = DESCENDING_SYMBOL;

  constructor(additionsService: AdditionsService) {
    super();
    this.service = additionsService;
    this.defaultSortingOrder = {
      name: NO_SORTING,
    };
  }

  onCreate(name: string): void {
    if (!name) {
      return;
    }
    this.createItem(new Addition(name));
  }

  onEdit(addition): void {
    if (addition.isEditing && addition.name) {
      this.updateItem(addition.id, addition);
    } else {
      addition.isEditing = true;
    }
  }
}
