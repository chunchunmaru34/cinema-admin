import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { USERS_URL } from '../../../config/api-endpoints';
import { User } from './user';
import Service from '../../classes/service/Service';

@Injectable()
export class UsersService extends Service<User> {
  constructor(http: HttpClient) {
    super();
    this.http = http;
    this.URL = USERS_URL;
  }
}
