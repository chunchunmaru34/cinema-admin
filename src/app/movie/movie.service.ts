import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { stringify } from 'qs';
import { Movie } from './movie';
import { MOVIES_URL } from '../../constants/api-endpoints';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class MovieService {
  constructor(
    private http: HttpClient
  ) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${MOVIES_URL}?relevant=false`, httpOptions);
  }

  getMoviesBy(params): Observable<Movie[]> {
    const query = stringify(params);
    return this.http.get<Movie[]>(`${MOVIES_URL}?${query}`, httpOptions);
  }

  getMovieById(id): Observable<Movie> {
    return this.http.get<Movie>(`${MOVIES_URL}/${id}`, httpOptions);
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(MOVIES_URL, movie, httpOptions);
  }

  updateMovie(id: String, movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${MOVIES_URL}/${id}`, movie, httpOptions);
  }

  deleteMovie(id: String): Observable<Movie> {
    return this.http.delete<Movie>(`${MOVIES_URL}/${id}`, httpOptions);
  }
}
