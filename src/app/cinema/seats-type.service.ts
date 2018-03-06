import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SeatsType } from './seats-type';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class SeatsTypeService {
  private seatsTypesUrl = 'http://localhost:3003/seats-types';

  constructor(private http: HttpClient) { }

  getSeatsTypes(): Observable<SeatsType[]> {
    return this.http.get<SeatsType[]>(this.seatsTypesUrl);
  }

  getSeatsTypeById(id): Observable<SeatsType> {
    return this.http.get<SeatsType>(`${this.seatsTypesUrl}/${id}`);
  }

  updateSeatsType(id: string, seatsType: SeatsType) {
    return this.http.put(`${this.seatsTypesUrl}/${id}`, seatsType, httpOptions);
  }

}
