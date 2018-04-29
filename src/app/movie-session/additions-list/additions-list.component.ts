import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  AdditionsService } from '../../additional-services/additions.service';
import { MovieSessionAddition } from '../movie-sessions-addition';

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
    this.prepareAdditions = this.prepareAdditions.bind(this);
  }

  prepareAdditions(additions): void {
    /*
        Checking for an already added additions and tagging them
        If addition is not added, returns object with 0 price without tagging
    */
    additions = additions.map(item => {
      const movieSessionAddition = this.added
        .find(elem => elem.addition.id === item.id);
      if (movieSessionAddition) {
        movieSessionAddition.addition.isAdded = true;
        return movieSessionAddition;
      } else {
        return new MovieSessionAddition(item, 0);
      }
    });
    this.additions = additions;
  }

  getAdditions(): void {
    this.additionsService.getAll()
      .subscribe(this.prepareAdditions);
  }

  add(sessionAddition: MovieSessionAddition): void {
    // check if it already added in array
    if (this.added
        .find(item => item.addition.id === sessionAddition.addition.id)) {
      return;
    }
    sessionAddition.addition.isAdded = true;
    this.addEvent.emit(sessionAddition);
    this.getAdditions();
  }

  remove(sessionAddition: MovieSessionAddition): void {
    sessionAddition.addition.isAdded = false;
    this.removeEvent.emit(sessionAddition);
    this.getAdditions();
  }
}
