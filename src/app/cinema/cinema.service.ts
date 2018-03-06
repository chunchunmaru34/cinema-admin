import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Cinema } from './cinema';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

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

  updateCinema(id: string, cinema: Cinema): Observable<Cinema> {
    return this.http.put<Cinema>(`${this.cinemasUrl}/${id}`, cinema, httpOptions);
  }

  deleteCinema(id: string) {
    return this.http.delete<Cinema>(`${this.cinemasUrl}/${id}`);
  }

  createCinema(cinema: Cinema): Observable<Cinema> {
    return this.http.post<Cinema>(this.cinemasUrl, cinema);
  }
}
