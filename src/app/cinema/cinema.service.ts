import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Cinema } from './cinema';
import { CINEMAS_URL } from '../constants/api-endpoints';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class CinemaService {
  constructor(private http: HttpClient) { }

  getCinemas(): Observable<Cinema[]> {
    return this.http.get<Cinema[]>(CINEMAS_URL);
  }

  getCinemaById(id): Observable<Cinema> {
    return this.http.get<Cinema>(`${CINEMAS_URL}/${id}`);
  }

  updateCinema(id: string, cinema: Cinema): Observable<Cinema> {
    return this.http.put<Cinema>(`${CINEMAS_URL}/${id}`, cinema, httpOptions);
  }

  deleteCinema(id: string) {
    return this.http.delete<Cinema>(`${CINEMAS_URL}/${id}`);
  }

  createCinema(cinema: Cinema): Observable<Cinema> {
    return this.http.post<Cinema>(CINEMAS_URL, cinema);
  }
}
