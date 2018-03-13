import { Component, OnInit } from '@angular/core';
import { SeatsTypeService } from '../../cinema/seats-type.service';
import { SeatsType } from '../../cinema/seats-type';
import {validate} from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'app-seats-types',
  templateUrl: './seats-types.component.html',
  styleUrls: ['./seats-types.component.scss']
})
export class SeatsTypesComponent implements OnInit {
  seatsTypes: SeatsType[];
  newSeatsType = new SeatsType();

  constructor(private seatsTypesService: SeatsTypeService) { }

  ngOnInit() {
    this.getSeatsTypes();
  }

  getSeatsTypes(): void {
    this.seatsTypesService.getSeatsTypes()
      .subscribe(seatsTypes => this.seatsTypes = seatsTypes);
  }

  validate(seatsType: SeatsType): boolean {
    return seatsType && seatsType.name && seatsType.space && seatsType.space > 1;
  }

  createSeatsType(): void {
    if (!this.validate(this.newSeatsType)) {
      return;
    }
    this.seatsTypesService.createSeatsType(this.newSeatsType)
      .subscribe(() => {
        this.newSeatsType = new SeatsType();
        this.getSeatsTypes();
      });
  }

  deleteSeatsType(seatsType): void {
    console.log(seatsType);
    this.seatsTypesService.deleteSeatsType(seatsType.id)
      .subscribe(() => this.getSeatsTypes());
  }
}
