import { SeatsType } from './seats-type';

export class Seat {
  number: number;
  row: number;
  kind: SeatsType;

  constructor(number, row, kind) {
    this.number = number;
    this.row = row;
    this.kind = kind;
  }
}
