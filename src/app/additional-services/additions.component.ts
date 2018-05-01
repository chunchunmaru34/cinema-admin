import { Component } from '@angular/core';
import { AdditionsService} from './additions.service';
import { Addition } from './addition';
import List from '../../classes/list/List';

@Component({
  selector: 'app-additions',
  templateUrl: './additions.component.html',
  styleUrls: ['./additions.component.scss']
})
export class AdditionsComponent extends List<Addition> {
  newAddition: string;

  constructor(additionsService: AdditionsService) {
    super();
    this.service = additionsService;
    this.defaultSortingOrder = {
      name: 0,
    };
  }

  onCreate(name: string): void {
    if (!name) {
      return;
    }
    this.createItem(new Addition(name));
  }

  onEdit(addition): void {
    if (addition.isEditing && addition.name) {
      this.updateItem(addition.id, addition);
    } else {
      addition.isEditing = true;
    }
  }
}
