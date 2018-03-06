import { Component, Input, OnInit } from '@angular/core';
import { Row } from '../row';
import {SeatsTypeService} from '../seats-type.service';
import {SeatsType} from '../seats-type';

@Component({
  selector: 'app-row-list',
  templateUrl: './row-list.component.html',
  styleUrls: ['./row-list.component.scss']
})
export class RowListComponent implements OnInit {
  @Input() rows: Row[];
  seatsTypes: SeatsType[];

  constructor(private seatsTypeService: SeatsTypeService) { }

  ngOnInit() {
    this.getSeatsTypes();
  }

  getSeatsTypes(): void {
    this.seatsTypeService.getSeatsTypes()
      .subscribe(seatsTypes => this.seatsTypes = seatsTypes);
  }

  addRow() {
    // todo: make a modal window or smth
    const capacity = +prompt('capacity?');
    this.rows.push(new Row(capacity || 10, this.rows.length + 1));
  }

  deleteRow(rowIndex) {
    this.rows.splice(rowIndex, 1);
  }
}
