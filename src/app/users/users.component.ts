import { Component } from '@angular/core';

import { UsersService } from './user.service';
import { User } from './user';
import List from '../../classes/list/List';
import * as sortingOrders from '../../classes/list/constants/sorting-orders';
import * as symbols from '../../classes/list/constants/sorting-symbols';
import { MAX_PAGINATION_SIZE } from '../../constants/pagination';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends List<User> {
  // todo: pick values from api
  ROLES = ['admin', 'user'];

  MAX_PAGINATION_SIZE = MAX_PAGINATION_SIZE;

  sortingOrders = sortingOrders;
  symbols = symbols;

  constructor(userService: UsersService) {
    super();
    this.service = userService;

    this.defaultSortingOrder = {
      name: sortingOrders.NO_SORTING,
      email: sortingOrders.NO_SORTING,
      role: sortingOrders.NO_SORTING,
    };
  }
}
