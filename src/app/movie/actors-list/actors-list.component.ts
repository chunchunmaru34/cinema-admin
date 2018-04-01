import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-actors-list',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.scss']
})
export class ActorsListComponent implements OnInit {
  @Input() actors: string[];
  newActor: string;

  constructor() { }

  ngOnInit() {
  }

  deleteActor(index): void {
    this.actors.splice(index, 1);
    this.newActor = '';
  }

  pushActor(name): void {
    if (name) {
      this.actors.push(name);
      this.newActor = '';
    }
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }
}
