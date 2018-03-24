import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MovieSession } from './movie-session';
import { MOVIE_SESSIONS_URL } from '../../constants/api-endpoints';

@Injectable()
export class MovieSessionService {
  constructor(private http: HttpClient) { }

  getMovieSessions(): Observable<MovieSession[]> {
    return this.http.get<MovieSession[]>(MOVIE_SESSIONS_URL);
  }

  getMovieSessionById(id): Observable<MovieSession> {
    return this.http.get<MovieSession>(`${MOVIE_SESSIONS_URL}/${id}`);
  }

  updateMovieSessions(id, movieSession): Observable<MovieSession> {
    return this.http.put<MovieSession>(`${MOVIE_SESSIONS_URL}/${id}`, movieSession);
  }

  deleteMovieSession(id): Observable<MovieSession> {
    return this.http.delete<MovieSession>(`${MOVIE_SESSIONS_URL}/${id}`);
  }

  createMovieSession(movieSession: MovieSession) {
    return this.http.post<MovieSession>(MOVIE_SESSIONS_URL, movieSession);
  }

}