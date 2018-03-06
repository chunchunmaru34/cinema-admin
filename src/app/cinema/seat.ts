export class Seat {
  number: number;
  row: number;
  kind: object;

  constructor(number, row, kind) {
    this.number = number;
    this.row = row;
    this.kind = kind;
  }
}
