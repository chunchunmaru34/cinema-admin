import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'qs';
import { Cinema } from './cinema';
import { CINEMAS_URL } from '../../constants/api-endpoints';
import Service from '../../classes/service/Service';

@Injectable()
export class CinemaService extends Service<Cinema> {

  constructor(http: HttpClient) {
    super();
    this.http = http;
    this.URL = CINEMAS_URL;
  }
}
