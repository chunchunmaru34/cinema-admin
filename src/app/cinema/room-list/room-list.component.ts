import { Component, Input, OnInit } from '@angular/core';
import { Room } from '../room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
  @Input() rooms: Room[];

  constructor() { }

  ngOnInit() {
  }

  deleteRoom(room: Room): void {
    const id = this.rooms.findIndex(item => item.codeName === room.codeName);
    this.rooms.splice(id, 1);
  }

  addRoom(): void {
    // todo: modal window
    const name = prompt('name?');
    this.rooms.push(new Room(name));
  }

}
