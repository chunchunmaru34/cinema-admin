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

  defaultSortingOrder = {
    name: 0,
  };

  constructor(additionsService: AdditionsService) {
    super();
    this.service = additionsService;
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
