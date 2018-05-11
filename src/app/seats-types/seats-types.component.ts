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

  validate(seatsType: SeatsType): boolean {
    return !!(seatsType && seatsType.name
      && seatsType.displayName && seatsType.priceMultiplier > 0);
  }

  createSeatsType(): void {
    if (!this.validate(this.newSeatsType)) {
      return;
    }
    this.createItem(this.newSeatsType);
    this.newSeatsType = new SeatsType();
  }

  onEdit(seatsType: SeatsType): void {
    if (seatsType.isEditing && this.validate(seatsType)) {
      this.updateItem(seatsType.id, seatsType);
    } else {
      seatsType.isEditing = true;
    }
  }
}
