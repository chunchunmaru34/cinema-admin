import { Component, OnInit } from '@angular/core';
import { UsersService } from './user.service';
import { User } from './user';
import List from '../../classes/list/List';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends List<User> {

  defaultSortingOrder = {
    name: 0,
    email: 0,
    role: 0,
  };

  // todo: pick values from api
  ROLES = ['admin', 'user'];

  constructor(userService: UsersService) {
    super();
    this.service = userService;
  }
}
