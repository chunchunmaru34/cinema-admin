import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SeatsType } from './seats-type';
import { SEATS_TYPES_URL } from '../constants/api-endpoints';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class SeatsTypeService {
  constructor(private http: HttpClient) { }

  getSeatsTypes(): Observable<SeatsType[]> {
    return this.http.get<SeatsType[]>(SEATS_TYPES_URL);
  }

  getSeatsTypeById(id): Observable<SeatsType> {
    return this.http.get<SeatsType>(`${SEATS_TYPES_URL}/${id}`);
  }

  updateSeatsType(id: string, seatsType: SeatsType) {
    return this.http.put(`${SEATS_TYPES_URL}/${id}`, seatsType, httpOptions);
  }

}
