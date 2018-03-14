import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  AdditionsService } from '../../additional-services/additions.service';
import { Addition } from '../../additional-services/addition';

@Component({
  selector: 'app-additions-list',
  templateUrl: './additions-list.component.html',
  styleUrls: ['./additions-list.component.scss']
})
export class AdditionsListComponent implements OnInit {
  // list of all possible additions
  additions: Addition[];
  // list of added to movieSession additions
  @Input() added: Addition[];
  @Output() addEvent = new EventEmitter<Addition>();
  @Output() removeEvent = new EventEmitter<Addition>();

  constructor(private additionsService: AdditionsService) {
  }

  ngOnInit() {
    this.getAdditions();
  }

  prepareAdditions(additions): void {
    // tagging additions that were already added to movieSession
    additions.forEach(item => {
      if (this.added.find(elem => elem.id === item.id)) {
        item.added = true;
      }
    });
    this.additions = additions;
  }

  // get all possible additional services
  getAdditions(): void {
    this.additionsService.getAdditions()
      .subscribe(additions => this.prepareAdditions(additions));
  }

  add(addition: Addition): void {
    // check if it already added in array
    if (this.added.find(item => item.id === addition.id)) {
      return;
    }
    addition.added = true;
    this.addEvent.emit(addition);
  }

  remove(addition: Addition): void {
    addition.added = false;
    this.removeEvent.emit(addition);
  }

}
