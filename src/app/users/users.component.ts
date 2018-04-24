import { Component, OnInit } from '@angular/core';
import { UsersService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];

  sortingOrder: object;
  defaultSortingOrder = {
    name: 0,
    email: 0,
    role: 0,
  };

  // todo: pick values from api
  ROLES = ['admin', 'user'];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.sortingOrder = { ...this.defaultSortingOrder };

    this.getUsers = this.getUsers.bind(this);
    this.receiveUsers = this.receiveUsers.bind(this);
    this.onUsersUpdate = this.onUsersUpdate.bind(this);

    this.getUsers();
  }

  receiveUsers(users): void {
    this.users = users;
  }

  getUsers(criteria?: any): void {
    const params = {
      ...criteria,
    };
    this.userService.getUsersBy(params)
      .subscribe(this.receiveUsers);
  }

  updateUser(user): void {
    this.userService.updateUser(user.id, user)
      .subscribe(this.onUsersUpdate);
  }

  onUsersUpdate(): void {
    this.getUsers();
  }

  deleteUser(user): void {
    this.userService.deleteUser(user.id)
      .subscribe(this.onUsersUpdate);
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

    this.getUsers(params);
  }
}
