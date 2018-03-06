import { Seat } from './seat';

// extremely bad decision
const emptySeatType = {
  name: 'empty',
  space: '1',
  _id: '5a9e8e33cf193b33689ec3e7'
};

export class Row {
  seats: Seat[];
  number: number;

  constructor(public capacity: number = 10, number) {
    this.capacity = capacity;
    this.number = number;
    this.seats = [];
    this.seats.length = capacity;
    for (let i = 0; i < this.seats.length; i++) {
      this.seats[i] = new Seat(i + 1, number, emptySeatType);
    }
  }
}
