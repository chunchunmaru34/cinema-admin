import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Movie } from './movie';
import { MOVIES_URL } from '../constants/api-endpoints';

@Injectable()
export class MovieService {
  constructor(
    private http: HttpClient
  ) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(MOVIES_URL);
  }

  getMovieById(id): Observable<Movie> {
    return this.http.get<Movie>(`${MOVIES_URL}/${id}`);
  }
}
