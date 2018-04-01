import { SeatsType } from '../seats-types/seats-type';

export class Row {
  seats: SeatsType[];

  constructor(length: number, seatsType: SeatsType) {
    console.log(length);
    this.seats = [];
    this.seats.length = length || 10;
    this.seats.fill(seatsType);
  }
}
