import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Cinema} from './cinema';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CinemaService {
  private cinemasUrl = 'http://localhost:3003/cinemas';

  constructor(private http: HttpClient) { }

  getCinemas(): Observable<Cinema[]> {
    return this.http.get<Cinema[]>(this.cinemasUrl);
  }

  getCinemaById(id): Observable<Cinema> {
    return this.http.get<Cinema>(`${this.cinemasUrl}/${id}`);
  }
}
