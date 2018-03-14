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

  constructor(private seatsTypesService: SeatsTypeService) { }

  ngOnInit() {
    this.getSeatsTypes();
  }

  getSeatsTypes(): void {
    this.seatsTypesService.getSeatsTypes()
      .subscribe(seatsTypes => this.seatsTypes = seatsTypes);
  }

  validate(seatsType: SeatsType): boolean {
    return seatsType && seatsType.name && seatsType.space && seatsType.space > 0;
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

  deleteSeatsType(seatsType: SeatsType): void {
    this.seatsTypesService.deleteSeatsType(seatsType.id)
      .subscribe(() => this.getSeatsTypes());
  }

  onEdit(seatsType: SeatsType): void {
    if (seatsType.isEditing && this.validate(seatsType)) {
      this.seatsTypesService.updateSeatsType(seatsType.id, seatsType)
        .subscribe(() => this.getSeatsTypes());
    } else {
      seatsType.isEditing = true;
    }
  }
}
