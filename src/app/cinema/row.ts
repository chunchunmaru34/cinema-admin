import { SeatsType } from './seats-type';

export class Row {
  seats: SeatsType[];

  constructor(length: number, seatsType: SeatsType) {
    this.seats = [];
    this.seats.length = length;
    this.seats.fill(seatsType);
  }
}
