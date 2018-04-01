import { Component, Input, OnInit } from '@angular/core';
import { SeatsType } from '../seats-type';
import { Row } from '../row';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  @Input() row: Row;
  @Input() seatsTypes: SeatsType[];

  constructor() {
  }

  ngOnInit() {
  }

  addSeat(seatIndex): void {
    // todo make a modal window with choices
    const type = prompt('type?');
    const seat = this.seatsTypes.find(item => item.name === type);

    if (!seat) {
      return;
    }

    this.row.seats[seatIndex] = seat;
  }

  deleteSeat(seatIndex): void {
    this.row.seats[seatIndex] = this.seatsTypes.find(item => item.name === 'empty');
  }
}
