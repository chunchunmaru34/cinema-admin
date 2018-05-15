import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import { SeatsType } from '../../seats-types/seats-type';
import { Row } from '../row';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  DEFAULT_SEAT_TYPE = 'common';

  @Input() row: Row;
  @Input() seatsTypes: SeatsType[];

  modalRef: BsModalRef;

  newSeat = {
    seatIndex: 0,
    seatType: this.DEFAULT_SEAT_TYPE,
  };

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
  }

  showAddModal(template, seatIndex) {
    this.newSeat.seatIndex = seatIndex;
    this.modalRef = this.modalService.show(template);
  }

  confirmModal() {
    this.modalRef.hide();
    this.addSeat();
  }

  addSeat(): void {
    const seat = this.seatsTypes.find(item => item.name === this.newSeat.seatType);

    if (!seat) {
      return;
    }

    this.row.seats[this.newSeat.seatIndex] = seat;
  }

  deleteSeat(seatIndex): void {
    this.row.seats[seatIndex] = this.seatsTypes.find(item => item.name === 'empty');
  }
}
