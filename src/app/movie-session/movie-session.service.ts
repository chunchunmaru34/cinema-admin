import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {MovieSession} from './movie-session';

@Injectable()
export class MovieSessionService {
  private movieSessionsUrl = 'http://localhost:3003/movie-sessions';

  constructor(private http: HttpClient) { }

  getMovieSessions(): Observable<MovieSession[]> {
    return this.http.get<MovieSession[]>(this.movieSessionsUrl);
  }

  getMovieSessionById(id): Observable<MovieSession> {
    return this.http.get<MovieSession>(`${this.movieSessionsUrl}/${id}`);
  }
}
