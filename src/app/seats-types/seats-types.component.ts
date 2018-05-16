import { Component } from '@angular/core';

import { SeatsTypeService } from './seats-type.service';
import { SeatsType } from './seats-type';
import List from '../../classes/list/List';
import * as sortingOrders from '../../classes/list/constants/sorting-orders';
import * as symbols from '../../classes/list/constants/sorting-symbols';
import { MAX_PAGINATION_SIZE } from '../../constants/pagination';
import { NAME_MUST_BE_UNIQUE_ERROR } from '../../constants/alert-messages';

@Component({
  selector: 'app-seats-types',
  templateUrl: './seats-types.component.html',
  styleUrls: ['./seats-types.component.scss']
})
export class SeatsTypesComponent extends List<SeatsType> {
  newSeatsType = new SeatsType();

  MAX_PAGINATION_SIZE = MAX_PAGINATION_SIZE;

  sortingOrders = sortingOrders;
  symbols = symbols;

  constructor(seatsTypesService: SeatsTypeService) {
    super();
    this.service = seatsTypesService;

    this.defaultSortingOrder = {
      name: sortingOrders.NO_SORTING,
      displayName: sortingOrders.NO_SORTING,
      priceMultiplier: sortingOrders.NO_SORTING,
    };
  }

  isValid(seatsType: SeatsType): boolean {
    // if duplicates count is more than 1 then item is not unique
    const repetitions = this.data.reduce((count, item) => {
      if (item.name === seatsType.name) {
        return count + 1;
      } else {
        return count;
      }
    }, 0);
    const isUnique = repetitions === 1;

    if (!isUnique) {
      this.alertError(NAME_MUST_BE_UNIQUE_ERROR);
      return false;
    }
    return isUnique;
  }

  createSeatsType(): void {
    if (this.data.find(item => item.name === this.newSeatsType.name)) {
      this.alertError(NAME_MUST_BE_UNIQUE_ERROR);
      return;
    }
    this.createItem(this.newSeatsType);
    this.newSeatsType = new SeatsType();
  }

  toggleEdit(seatsType: SeatsType): void {
    seatsType.isEditing = true;
  }

  onEdit(seatsType: SeatsType): void {
    if (!this.isValid(seatsType)) {
      return;
    }
    this.updateItem(seatsType.id, seatsType);
  }
}
