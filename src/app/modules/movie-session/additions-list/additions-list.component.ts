import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  AdditionsService } from '../additions.service';
import { MovieSessionAddition } from '../movie-sessions-addition';
import { Addition } from '../addition';

@Component({
  selector: 'app-additions-list',
  templateUrl: './additions-list.component.html',
  styleUrls: ['./additions-list.component.scss']
})
export class AdditionsListComponent implements OnInit {
  // list of all possible additions
  additions: MovieSessionAddition[];
  // list of added to movieSession additions
  @Input() added: MovieSessionAddition[];
  @Output() addEvent = new EventEmitter<MovieSessionAddition>();
  @Output() removeEvent = new EventEmitter<MovieSessionAddition>();

  constructor(private additionsService: AdditionsService) {
  }

  ngOnInit() {
    this.getAdditions();
  }

  prepareAdditions(additions): void {
    // tagging additions that were already added to movieSession
    additions.forEach(item => {
      if (this.added.find(elem => elem.addition.id === item.id)) {
        item.added = true;
      }
    });
    additions = additions.map(item => {
      if (item.added) {
        const movieSessionAddition = this.added.find(elem => elem.addition.id === item.id);
        movieSessionAddition.addition.added = true;
        return movieSessionAddition;
      } else {
        return new MovieSessionAddition(item, 0);
      }
    });
    console.log(additions);
    this.additions = additions;
    // })
    // console.log(additions);
    // this.additions = additions;
  }

  // get all possible additional services
  getAdditions(): void {
    this.additionsService.getAdditions()
      .subscribe(additions => this.prepareAdditions(additions));
  }

  add(sessionAddition: MovieSessionAddition): void {
    // check if it already added in array
    if (this.added.find(item => item.addition.id === sessionAddition.addition.id)) {
      return;
    }
    sessionAddition.addition.added = true;
    this.addEvent.emit(sessionAddition);
    this.getAdditions();
  }

  remove(sessionAddition: MovieSessionAddition): void {
    sessionAddition.addition.added = false;
    this.removeEvent.emit(sessionAddition);
    this.getAdditions();
  }

}
