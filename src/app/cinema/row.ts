import { SeatsType } from '../seats-types/seats-type';
import { Seat } from './seat';

export class Row {
  seats: Seat[];
  number: number;

  constructor(number: number, length: number, seatsType: SeatsType) {
    this.seats = [];
    this.number = number;
    this.seats.length = length || 10;

    for (let i = 0; i < length; i++) {
      this.seats[i] = new Seat(i + 1, seatsType);
    }
  }
}
