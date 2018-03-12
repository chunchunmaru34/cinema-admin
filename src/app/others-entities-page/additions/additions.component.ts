import {Component, Input, OnInit} from '@angular/core';
import { AdditionsService} from '../../movie-session/additions.service';

@Component({
  selector: 'app-additions',
  templateUrl: './additions.component.html',
  styleUrls: ['./additions.component.scss']
})
export class AdditionsComponent implements OnInit {
  newAddition: string;
  additions: any[];

  constructor(private additionsService: AdditionsService) { }

  ngOnInit() {
    this.getAdditions();
  }

  getAdditions(): void {
    this.additionsService.getAdditions()
      .subscribe(additions => this.additions = additions);
  }

  createAddition(name) {
    // todo
    // this.additionsService.createAddition();
  }

  deleteAddition(index: number) {
    this.additions.splice(index, 1);
  }
}
