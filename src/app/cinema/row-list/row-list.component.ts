import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import { Row } from '../row';
import { SeatsTypeService } from '../../seats-types/seats-type.service';
import { SeatsType } from '../../seats-types/seats-type';

@Component({
  selector: 'app-row-list',
  templateUrl: './row-list.component.html',
  styleUrls: ['./row-list.component.scss']
})
export class RowListComponent implements OnInit {
  DEFAULT_ROW_LENGTH = 10;
  DEFAULT_SEATS_TYPE = 'common';
  EMPTY_SEAT = 'empty';

  @Input() rows: Row[];

  seatsTypes: SeatsType[];

  newRow = {
    length: this.DEFAULT_ROW_LENGTH,
    seatType: this.DEFAULT_SEATS_TYPE,
  };

  modalRef: BsModalRef;

  constructor(
    private seatsTypeService: SeatsTypeService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.receiveSeatsTypes = this.receiveSeatsTypes.bind(this);

    this.getSeatsTypes();
  }

  getSeatsTypes(): void {
    this.seatsTypeService.getAll()
      .subscribe(this.receiveSeatsTypes);
  }

  receiveSeatsTypes(res): void {
    this.seatsTypes = res.data;
  }

  showModal(template): void {
    this.modalRef = this.modalService.show(template);
  }

  confirmModal() {
    this.addRow();
    this.modalRef.hide();
  }

  addRow() {
    if (this.newRow.length < 1) {
      return;
    }

    // Empty seat represented by null
    let seatType = null;
    if (this.newRow.seatType !== this.EMPTY_SEAT) {
      seatType = this.seatsTypes.find(item => item.name === this.newRow.seatType);
    }

    this.rows.push(new Row(this.newRow.length, seatType));
  }

  deleteRow(rowIndex) {
    this.rows.splice(rowIndex, 1);
  }
}
