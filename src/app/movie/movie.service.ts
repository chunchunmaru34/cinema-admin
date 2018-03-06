import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './movie';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class MovieService {
  private moviesUrl = 'http://localhost:3003/movies';

  constructor(
    private http: HttpClient
  ) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl);
  }

  getMovieById(id): Observable<Movie> {
    return this.http.get<Movie>(`${this.moviesUrl}/${id}`);
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
