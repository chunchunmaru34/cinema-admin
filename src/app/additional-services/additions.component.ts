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
    const isUnique = !this.data.find(item => item.name === name);

    if (!isUnique) {
      this.alertError('Name must be unique');
      return;
    }
    if (!name) {
      this.alertError('You should provide a name');
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
      this.alertError('Name must be unique');
      return;
    }

    this.updateItem(addition.id, addition);
  }
}
