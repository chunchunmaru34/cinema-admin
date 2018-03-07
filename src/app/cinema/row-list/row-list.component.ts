import { Component, Input, OnInit } from '@angular/core';
import { Row } from '../row';

@Component({
  selector: 'app-row-list',
  templateUrl: './row-list.component.html',
  styleUrls: ['./row-list.component.scss']
})
export class RowListComponent implements OnInit {
  @Input() rows: Row[];

  constructor() { }

  ngOnInit() {
  }

  addRow() {
    // todo: make a modal window or smth
    const capacity = +prompt('capacity?');
    // null will be an empty seat temporary
    this.rows.push(new Row(capacity || 10, this.rows.length + 1, null));
  }

  deleteRow(rowIndex) {
    this.rows.splice(rowIndex, 1);
  }
}
