import { Component, OnInit } from '@angular/core';
import { SeatsTypeService } from './seats-type.service';
import { SeatsType } from './seats-type';

@Component({
  selector: 'app-seats-types',
  templateUrl: './seats-types.component.html',
  styleUrls: ['./seats-types.component.scss']
})
export class SeatsTypesComponent implements OnInit {
  seatsTypes: SeatsType[];
  newSeatsType = new SeatsType();

  sortingOrder: object;
  defaultSortingOrder = {
    name: 0,
    displayName: 0,
    priceMultiplier: 0,
  };

  constructor(private seatsTypesService: SeatsTypeService) { }

  ngOnInit() {
    this.sortingOrder = { ...this.defaultSortingOrder };

    this.getSeatsTypes = this.getSeatsTypes.bind(this);
    this.receiveSeatsTypes = this.receiveSeatsTypes.bind(this);
    this.onSeatsTypesUpdate = this.onSeatsTypesUpdate.bind(this);
    this.onCreateSeatsType = this.onCreateSeatsType.bind(this);

    this.getSeatsTypes();
  }

  receiveSeatsTypes(seatsTypes): void {
    this.seatsTypes = seatsTypes;
  }

  getSeatsTypes(criteria?: any): void {
    const params = {
      ...criteria
    };

    this.seatsTypesService.getSeatsTypesBy(params)
      .subscribe(this.receiveSeatsTypes);
  }

  validate(seatsType: SeatsType): boolean {
    return !!(seatsType && seatsType.name && seatsType.displayName && seatsType.priceMultiplier > 0);
  }

  onCreateSeatsType(): void {
    this.newSeatsType = new SeatsType();
    this.getSeatsTypes();
  }

  createSeatsType(): void {
    if (!this.validate(this.newSeatsType)) {
      return;
    }
    this.seatsTypesService.createSeatsType(this.newSeatsType)
      .subscribe(this.onCreateSeatsType);
  }

  onSeatsTypesUpdate(): void {
    this.getSeatsTypes();
  }

  deleteSeatsType(seatsType: SeatsType): void {
    this.seatsTypesService.deleteSeatsType(seatsType.id)
      .subscribe(this.onSeatsTypesUpdate);
  }

  onEdit(seatsType: SeatsType): void {
    if (seatsType.isEditing && this.validate(seatsType)) {
      this.seatsTypesService.updateSeatsType(seatsType.id, seatsType)
        .subscribe(this.onSeatsTypesUpdate);
    } else {
      seatsType.isEditing = true;
    }
  }

  sort(parameterName: string): void {
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
        break;
      default:
        this.sortingOrder[parameterName] = this.defaultSortingOrder[parameterName];
    }

    // Reset other sorting, because we can sort only by 1 param
    const sortingOrder = { ...this.defaultSortingOrder };
    sortingOrder[parameterName] =  this.sortingOrder[parameterName];
    this.sortingOrder = sortingOrder;

    params['sort-by'] = parameterName;
    params['sort-order'] = this.sortingOrder[parameterName];

    this.getSeatsTypes(params);
  }
}
