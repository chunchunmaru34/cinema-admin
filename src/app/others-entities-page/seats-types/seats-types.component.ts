import { Component, OnInit } from '@angular/core';
import { SeatsTypeService } from '../../cinema/seats-type.service';
import { SeatsType } from '../../cinema/seats-type';

@Component({
  selector: 'app-seats-types',
  templateUrl: './seats-types.component.html',
  styleUrls: ['./seats-types.component.scss']
})
export class SeatsTypesComponent implements OnInit {
  seatsTypes: SeatsType[];
  newSeatsType: string;

  constructor(private seatsTypesService: SeatsTypeService) { }

  ngOnInit() {
    this.getSeatsTypes();
  }

  getSeatsTypes(): void {
    this.seatsTypesService.getSeatsTypes()
      .subscribe(seatsTypes => this.seatsTypes = seatsTypes);
  }

  createSeatsType(): void {
    // todo
  }

}
