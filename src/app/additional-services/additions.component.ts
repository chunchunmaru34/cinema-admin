import { Component, OnInit } from '@angular/core';
import { AdditionsService} from './additions.service';
import { Addition } from './addition';

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
    this.getAdditions = this.getAdditions.bind(this);
    this.getAdditions();
  }

  getAdditions(): void {
    this.additionsService.getAdditions()
      .subscribe(additions => this.additions = additions);
  }

  createAddition(name: string): void {
    if (!name) {
      return;
    }
    this.additionsService.createAddition(new Addition(name))
      .subscribe(this.getAdditions);
  }

  deleteAddition(addition: Addition): void {
    this.additionsService.deleteAddition(addition.id)
      .subscribe(this.getAdditions);
  }

  onEdit(addition): void {
    if (addition.isEditing && addition.name) {
      this.additionsService.updateAddition(addition.id, addition)
        .subscribe(this.getAdditions);
    } else {
      addition.isEditing = true;
    }
  }
}
