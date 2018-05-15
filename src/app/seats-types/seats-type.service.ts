import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { SeatsType } from './seats-type';
import { SEATS_TYPES_URL } from '../../../config/api-endpoints';
import Service from '../../classes/service/Service';

@Injectable()
export class SeatsTypeService extends Service<SeatsType> {
  constructor(http: HttpClient) {
    super();
    this.http = http;
    this.URL = SEATS_TYPES_URL;
  }
}
