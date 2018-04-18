import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from 'qs';
import { SeatsType } from './seats-type';
import { SEATS_TYPES_URL } from '../../constants/api-endpoints';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class SeatsTypeService {
  constructor(private http: HttpClient) { }

  createSeatsType(seatsType: SeatsType) {
    return this.http.post(`${SEATS_TYPES_URL}`, seatsType, httpOptions);
  }

  getSeatsTypes(): Observable<SeatsType[]> {
    return this.http.get<SeatsType[]>(SEATS_TYPES_URL);
  }

  getSeatsTypesBy(params): Observable<SeatsType[]> {
    Object.keys(params).forEach((key) => {
      if (!params[key]) {
        delete params[key];
      }
    });
    const query = stringify(params);

    return this.http.get<SeatsType[]>(`${SEATS_TYPES_URL}?${query}`);
  }

  getSeatsTypeById(id): Observable<SeatsType> {
    return this.http.get<SeatsType>(`${SEATS_TYPES_URL}/${id}`);
  }

  updateSeatsType(id: string, seatsType: SeatsType) {
    return this.http.put(`${SEATS_TYPES_URL}/${id}`, seatsType, httpOptions);
  }

  deleteSeatsType(id: string) {
    return this.http.delete(`${SEATS_TYPES_URL}/${id}`);
  }
}
