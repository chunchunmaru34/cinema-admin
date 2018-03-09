import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Cinema } from './cinema';
import { CINEMAS_URL } from '../constants/api-endpoints'

@Injectable()
export class CinemaService {
  constructor(private http: HttpClient) { }

  getCinemas(): Observable<Cinema[]> {
    return this.http.get<Cinema[]>(CINEMAS_URL);
  }

  getCinemaById(id): Observable<Cinema> {
    return this.http.get<Cinema>(`${CINEMAS_URL}/${id}`);
  }
}
