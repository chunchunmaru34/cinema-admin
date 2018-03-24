import { SeatsType } from '../seats-types/seats-type';

export class Row {
  seats: SeatsType[];
  number: number;

  constructor(public capacity: number = 10, number, seatsType) {
    this.capacity = capacity;
    this.number = number;
    this.seats = [];
    this.seats.length = capacity;
    this.seats.fill(seatsType);
  }
}
