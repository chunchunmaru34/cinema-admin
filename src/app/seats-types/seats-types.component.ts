import { Component } from '@angular/core';
import { SeatsTypeService } from './seats-type.service';
import { SeatsType } from './seats-type';
import List from '../../classes/list/List';
import { NO_SORTING, ASCENDING, DESCENDING } from '../../classes/list/constants/sorting-orders';
import { ASCENDING_SYMBOL, DESCENDING_SYMBOL } from '../../classes/list/constants/sorting-symbols';
import { MAX_PAGINATION_SIZE } from '../../constants/pagination';

@Component({
  selector: 'app-seats-types',
  templateUrl: './seats-types.component.html',
  styleUrls: ['./seats-types.component.scss']
})
export class SeatsTypesComponent extends List<SeatsType> {
  newSeatsType = new SeatsType();

  MAX_PAGINATION_SIZE = MAX_PAGINATION_SIZE;

  ASCENDING = ASCENDING;
  DESCENDING = DESCENDING;
  NO_SORTING = NO_SORTING;

  ASCENDING_SYMBOL = ASCENDING_SYMBOL;
  DESCENDING_SYMBOL = DESCENDING_SYMBOL;

  constructor(seatsTypesService: SeatsTypeService) {
    super();
    this.service = seatsTypesService;

    this.defaultSortingOrder = {
      name: NO_SORTING,
      displayName: NO_SORTING,
      priceMultiplier: NO_SORTING,
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
      this.alertError('Name must be unique');
      return false;
    }
    return isUnique;
  }

  createSeatsType(): void {
    if (this.data.find(item => item.name === this.newSeatsType.name)) {
      this.alertError('Name must be unique');
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
