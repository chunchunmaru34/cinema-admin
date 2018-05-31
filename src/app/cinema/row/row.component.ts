import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import { SeatsType } from '../../seats-types/seats-type';
import { Row } from '../row';
import { Seat } from '../seat';

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
    const seatType = this.seatsTypes.find(item => item.name === this.newSeat.seatType);

    if (!seatType) {
      return;
    }

    this.row.seats[this.newSeat.seatIndex] = new Seat(this.newSeat.seatIndex + 1, seatType);
  }

  deleteSeat(seatIndex): void {
    const emptySeat = this.seatsTypes.find(item => item.name === 'empty');
    this.row.seats[seatIndex] = new Seat(seatIndex + 1, emptySeat);
  }
}
