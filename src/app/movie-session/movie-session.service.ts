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

  updateMovieSessions(id, movieSession): Observable<MovieSession> {
    return this.http.put<MovieSession>(`${this.movieSessionsUrl}/${id}`, movieSession);
  }

  deleteMovieSession(id): Observable<MovieSession> {
    return this.http.delete<MovieSession>(`${this.movieSessionsUrl}/${id}`);
  }

  createMovieSession(movieSession: MovieSession) {
    return this.http.post<MovieSession>(this.movieSessionsUrl, movieSession);
  }

}
