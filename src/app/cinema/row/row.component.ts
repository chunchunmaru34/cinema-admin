import { Component, Input, OnInit } from '@angular/core';
import {emptySeatType, Row} from '../row';
import { SeatsType } from '../seats-type';
import {Seat} from '../seat';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  @Input() row: Row;
  @Input() seatsTypes: SeatsType[];
  constructor() { }

  ngOnInit() {
  }

  addSeat(rowNumber, seatNumber): void {
    const type = prompt('type?');

    // temp
    const kind = this.seatsTypes.find(item => item.name === type);
    if (kind) {
      this.row.seats[seatNumber - 1].kind = kind;
      // delete occupied space
      // todo check neighbours space then
      for (let i = 0; i < kind.space - 1; i++) {
        // if (this.row.seats[seatNumber].kind.space > 1) {
        //   for (let j = 0; j < this.row.seats[seatNumber].kind.space; j++) {
        //     const replacement = new Seat(seatNumber, this.row.number, emptySeatType);
        //     this.row.seats.splice(seatNumber, 1, replacement);
        //   }
        // }
        this.row.seats.splice(seatNumber, 1);
      }
      // shift indexes
      for (let i = seatNumber; seatNumber < this.row.seats.length; i++) {
        this.row.seats[i].number -= kind.space - 1;
      }
    }
  }

}
