import { Row } from './row';

export class Room {
  rows: Row[];

  constructor(public name: string) {
    this.rows = [];
  }
}
