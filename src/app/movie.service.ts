import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Movie } from './movie';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MovieService {
  private moviesUrl = 'http://localhost:3003/movies';

  constructor(
    private http: HttpClient
  ) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl);
  }

}
