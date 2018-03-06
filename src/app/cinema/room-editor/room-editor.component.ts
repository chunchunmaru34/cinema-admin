import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Room } from '../room';
import { SeatsType } from '../seats-type';
import { SeatsTypeService } from '../seats-type.service';

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

  editName(event): void {
    event.stopPropagation();
    this.isEditingName = !this.isEditingName;
  }

  toggleDetails(): void {
    this.isDetailsHidden = !this.isDetailsHidden;
  }

  onNameInputClick(event): void {
    event.stopPropagation();
  }
}
