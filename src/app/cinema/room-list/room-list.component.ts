import { Component, Input, OnInit } from '@angular/core';
import { Room } from '../room';
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
  @Input() rooms: Room[];
  newRoom = {
    name: '',
  };
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  showAddModal(template): void {
    this.modalRef = this.modalService.show(template);
  }

  confirmModal(): void {
    this.modalRef.hide();
    this.addRoom();
  }

  deleteRoom(room: Room): void {
    const id = this.rooms.findIndex(item => item.codeName === room.codeName);
    this.rooms.splice(id, 1);
  }

  addRoom(): void {
    if (!this.newRoom.name) {
      return;
    }
    this.rooms.push(new Room(this.newRoom.name));
    this.newRoom.name = '';
  }

}
