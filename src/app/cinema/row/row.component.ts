import { Component, Input, OnInit } from '@angular/core';
import { Row } from '../row';
import { SeatsType } from '../seats-type';

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

  addSeat(seatNumber): void {
    // todo make a modal window with choices
    const type = prompt('type?');
    const seat = this.seatsTypes.find(item => item.name === type);
    const emptySeat = this.seatsTypes.find(item => item.name === 'empty');

    if (!seat) {
      return;
    }
    // check if remaining space is enough
    if (this.row.seats.length < seatNumber + seat.space) {
      // todo: alert of error
      return;
    }
    // changing seat type
    this.row.seats[seatNumber] = seat;
    // calculating space to remove or fill
    let space = seat.space - 1;
    while (space > 0) {
      space -= this.row.seats[seatNumber + 1].space;
      this.row.seats.splice(seatNumber + 1, 1);
    }
    if (space === 0) {
      return;
    } else {
      // compensating space
      while (space++) {
        this.row.seats.splice(seatNumber + 1, 0, emptySeat);
      }
    }
  }

  deleteSeat(seatIndex) {
    let space = this.row.seats[seatIndex].space;
    const emptySeat = this.seatsTypes.find(item => item.name === 'empty');
    if ( space > 1) {
      this.row.seats[seatIndex] = emptySeat;
      while (--space) {
        this.row.seats.splice(seatIndex, 0, emptySeat);
      }
    } else {
      this.row.seats[seatIndex] = emptySeat;
    }
  }
}
