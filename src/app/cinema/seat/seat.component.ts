import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { SeatsType } from '../../seats-types/seats-type';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {
  @Input() seatsType: SeatsType;
  @Input() index: number;

  @Output() deleteSeatEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deleteSeat(index: number) {
    this.deleteSeatEvent.emit(index);
  }

}
