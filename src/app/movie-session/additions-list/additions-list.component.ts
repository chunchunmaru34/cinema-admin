import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {  AdditionsService } from '../additions.service';
import { Addition } from '../addition';

@Component({
  selector: 'app-additions-list',
  templateUrl: './additions-list.component.html',
  styleUrls: ['./additions-list.component.scss']
})
export class AdditionsListComponent implements OnInit {
  additions: Addition[];
  added: Addition[] = [];
  @Output() addEvent = new EventEmitter<Addition>();
  @Output() removeEvent = new EventEmitter<number>();

  constructor(private additionsService: AdditionsService) { }

  ngOnInit() {
    this.getAdditions();
  }

  prepareAdditions(additions): void {
    // this.additions = additions.map(item => ({...item, added: false}));
    this.additions = additions;
  }

  getAdditions(): void {
    this.additionsService.getAdditions().subscribe(additions => this.prepareAdditions(additions));
  }

  add(addition: Addition) {
    addition.added = true;
    this.added.push(addition);
    this.addEvent.emit(addition);
  }

  remove(index: number) {
    this.additions[index].added = false;
    this.added.splice(index, 1);
    this.removeEvent.emit(index);
  }

}
