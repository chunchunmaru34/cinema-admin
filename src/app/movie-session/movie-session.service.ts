import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'qs';
import { MovieSession } from './movie-session';
import { MOVIE_SESSIONS_URL } from '../../../config/api-endpoints';
import Service from '../../classes/service/Service';

@Injectable()
export class MovieSessionService extends Service<MovieSession> {
  constructor(http: HttpClient) {
    super();
    this.http = http;
    this.URL = MOVIE_SESSIONS_URL;
  }
}
