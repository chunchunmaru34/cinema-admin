import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Room } from '../room';

@Component({
  selector: 'app-room-editor',
  templateUrl: './room-editor.component.html',
  styleUrls: ['./room-editor.component.scss']
})
export class RoomEditorComponent implements OnInit {
  @Input() room: Room;

  @Output() deleteRoomEvent = new EventEmitter<Room>();

  isEditingName = false;

  isDetailsHidden = true;

  constructor() { }

  ngOnInit() {
  }

  deleteRoom(event): void {
    event.stopPropagation();
    this.deleteRoomEvent.emit(this.room);
  }

  toggleNameEdit(event): void {
    event.stopPropagation();
    this.isEditingName = !this.isEditingName;
  }

  toggleDetails(): void {
    this.isDetailsHidden = !this.isDetailsHidden;
  }
}
