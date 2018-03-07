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

  constructor() { }

  ngOnInit() {
  }

  // WARNING: kinda complex function
  addSeat(seatNumber): void {
    // todo make a modal window with choices
    const type = prompt('type?');
    const seat = this.seatsTypes.find(item => item.name === type);
    const emptySeat = this.seatsTypes.find(item => item.name === 'empty');

    // todo think of better logic
    if (seat) {
      // check if remaining space is enough
      if (this.row.seats.length < seatNumber + seat.space) {
        // todo: alert of error
        return;
      }
      // changing seat type
      this.row.seats[seatNumber] = seat;
      // deleting occupied space
      for (let i = 0; i < seat.space - 1; i++) {
        const neighbourSpace = this.row.seats[seatNumber + 1].space;
        // if neighbour seat space > 1 we should refill row with empty seats after neighbour deletion
        if (neighbourSpace > 1) {
          // how many empty seats we should create
          const difference = neighbourSpace - (seat.space - 1);
          // deleting neighbour
          this.row.seats.splice(seatNumber + 1, 1);
          // creating empty seats right after the deleted seat
          for (let j = seatNumber + 1; j < seatNumber + 1 + difference; j++) {
            this.row.seats.splice(j, 0, emptySeat);
          }
          // breaking from loop if all space was filled or moving loop forward according to filled space
          if (neighbourSpace >= seat.space - 1) {
            break;
          } else {
            i += neighbourSpace;
          }
        } else  {
          this.row.seats.splice(seatNumber + 1, 1);
        }
      }
    }
  }

}
