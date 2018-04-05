import { Room } from './room';

export class Cinema {
  id: string;
  name: string;
  city: string;
  rooms: Room[];
  roomsCount: number;

  constructor() {
    this.rooms = [];
  }
}
