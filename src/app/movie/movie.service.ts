import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'qs';

import { Movie } from './movie';
import { MOVIES_URL } from '../../../config/api-endpoints';
import Service from '../../classes/service/Service';

@Injectable()
export class MovieService extends Service<Movie> {
  constructor(http: HttpClient) {
    super();
    this.http = http;
    this.URL = MOVIES_URL;
  }
}
