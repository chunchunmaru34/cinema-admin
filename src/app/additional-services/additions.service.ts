import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'qs';
import { Addition } from './addition';
import { ADDITIONS_URL } from '../../../config/api-endpoints';
import Service from '../../classes/service/Service';

@Injectable()
export class AdditionsService extends Service<Addition> {
  constructor(http: HttpClient) {
    super();
    this.http = http;
    this.URL = ADDITIONS_URL;
  }
}
