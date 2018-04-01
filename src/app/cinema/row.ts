import { SeatsType } from './seats-type';

export class Row {
  seats: SeatsType[];

  constructor(length: number, seatsType: SeatsType) {
    this.seats = [];
    for (let i = 0; i < length; i++) {
      this.seats.push(seatsType);
    }
  }
}
