import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.scss']
})
export class ActorsListComponent implements OnInit {
  @Input() actors: string[];

  constructor() { }

  ngOnInit() {
  }

  deleteActor(index): void {
    this.actors.splice(index, 1);
  }

}
