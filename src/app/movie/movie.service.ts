import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Movie } from './movie';
import { MOVIES_URL } from '../constants/api-endpoints';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

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

  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.moviesUrl, movie, httpOptions);
  }

  updateMovie(id: String, movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.moviesUrl}/${id}`, movie, httpOptions);
  }

  deleteMovie(id: String): Observable<Movie> {
    return this.http.delete<Movie>(`${this.moviesUrl}/${id}`);
  }
}
