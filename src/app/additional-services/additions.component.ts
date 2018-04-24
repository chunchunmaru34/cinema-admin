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

  sortingOrder: object;
  defaultSortingOrder = {
    name: 0,
  };

  constructor(private additionsService: AdditionsService) { }

  ngOnInit() {
    this.sortingOrder = { ...this.defaultSortingOrder };

    this.getAdditions = this.getAdditions.bind(this);
    this.getAdditions();
  }

  getAdditions(criteria?: any): void {
    const params = {
      ...criteria
    };
    this.additionsService.getAdditionsBy(params)
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

  sort(parameterName: string): void {
    const params = {};

    switch (this.sortingOrder[parameterName]) {
      case 0:
        this.sortingOrder[parameterName] = 1;
        break;
      case 1:
        this.sortingOrder[parameterName] = -1;
        break;
      case -1:
        this.sortingOrder[parameterName] = 0;
        params['sort-by'] = null;
        params['sort-order'] = null;
        break;
      default:
        this.sortingOrder[parameterName] = this.defaultSortingOrder[parameterName];
    }

    // Reset other sorting, because we can sort only by 1 param
    const sortingOrder = { ...this.defaultSortingOrder };
    sortingOrder[parameterName] =  this.sortingOrder[parameterName];
    this.sortingOrder = sortingOrder;

    params['sort-by'] = parameterName;
    params['sort-order'] = this.sortingOrder[parameterName];

    this.getAdditions(params);
  }
}
