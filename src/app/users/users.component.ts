import { Component } from '@angular/core';
import { UsersService } from './user.service';
import { User } from './user';
import List from '../../classes/list/List';
import { NO_SORTING, ASCENDING, DESCENDING } from '../../classes/list/constants/sorting-orders';
import { ASCENDING_SYMBOL, DESCENDING_SYMBOL } from '../../classes/list/constants/sorting-symbols';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends List<User> {
  // todo: pick values from api
  ROLES = ['admin', 'user'];

  ASCENDING = ASCENDING;
  DESCENDING = DESCENDING;
  NO_SORTING = NO_SORTING;

  ASCENDING_SYMBOL = ASCENDING_SYMBOL;
  DESCENDING_SYMBOL = DESCENDING_SYMBOL;

  constructor(userService: UsersService) {
    super();
    this.service = userService;

    this.defaultSortingOrder = {
      name: NO_SORTING,
      email: NO_SORTING,
      role: NO_SORTING,
    };
  }
}
