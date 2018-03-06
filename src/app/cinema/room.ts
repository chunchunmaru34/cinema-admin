import { Row } from './row';

export class Room {
  rows: Row[];

  constructor(public codeName: string) {
    this.codeName = codeName;
    this.rows = [];
  }
}
