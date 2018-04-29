import { Component } from '@angular/core';
import { SeatsTypeService } from './seats-type.service';
import { SeatsType } from './seats-type';
import List from '../../classes/list/List';

@Component({
  selector: 'app-seats-types',
  templateUrl: './seats-types.component.html',
  styleUrls: ['./seats-types.component.scss']
})
export class SeatsTypesComponent extends List<SeatsType> {
  newSeatsType = new SeatsType();

  defaultSortingOrder = {
    name: 0,
    displayName: 0,
    priceMultiplier: 0,
  };

  constructor(seatsTypesService: SeatsTypeService) {
    super();
    this.service = seatsTypesService;
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
