import { Component, OnInit } from '@angular/core';
import { AdditionsService} from '../../movie-session/additions.service';
import { Addition } from '../../movie-session/addition';

@Component({
  selector: 'app-additions',
  templateUrl: './additions.component.html',
  styleUrls: ['./additions.component.scss']
})
export class AdditionsComponent implements OnInit {
  newAddition: string;
  additions: Addition[];

  constructor(private additionsService: AdditionsService) { }

  ngOnInit() {
    this.getAdditions();
  }

  getAdditions(): void {
    this.additionsService.getAdditions()
      .subscribe(additions => this.additions = additions);
  }

  createAddition(name) {
    this.additionsService.createAddition(new Addition(name))
      .subscribe(() => this.getAdditions());
  }

  deleteAddition(addition: Addition) {
    this.additionsService.deleteAddition(addition.id)
      .subscribe(() => this.getAdditions());
  }
}
