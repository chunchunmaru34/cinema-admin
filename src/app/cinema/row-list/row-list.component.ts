import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Row } from '../row';
import { SeatsTypeService } from '../../seats-types/seats-type.service';
import { SeatsType } from '../../seats-types/seats-type';

@Component({
  selector: 'app-row-list',
  templateUrl: './row-list.component.html',
  styleUrls: ['./row-list.component.scss']
})
export class RowListComponent implements OnInit {
  @Input() rows: Row[];
  seatsTypes: SeatsType[];
  newRow = {
    length: 10,
    seatType: 'common',
  };
  modalRef: BsModalRef;

  constructor(private seatsTypeService: SeatsTypeService,
              private modalService: BsModalService) { }

  ngOnInit() {
    this.getSeatsTypes();
  }

  getSeatsTypes(): void {
    this.seatsTypeService.getAll()
      .subscribe(seatsTypes => this.seatsTypes = seatsTypes);
  }

  showModal(template) {
    this.modalRef = this.modalService.show(template);
  }

  confirmModal() {
    this.addRow();
    this.modalRef.hide();
  }

  addRow() {
    if (this.newRow.length < 1) {
      return;
    }
    const seatType = this.seatsTypes.find(item => item.name === this.newRow.seatType);
    this.rows.push(new Row(this.newRow.length, seatType));
  }

  deleteRow(rowIndex) {
    this.rows.splice(rowIndex, 1);
  }
}
