import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { MOVIES_ROUTE } from '../../../constants/routes';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent implements OnInit {
  movies: Movie[];
  MOVIES_ROUTE = MOVIES_ROUTE;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.getMovies = this.getMovies.bind(this);
    this.onDeleteMovie = this.onDeleteMovie.bind(this);
    this.receiveMovies = this.receiveMovies.bind(this);

    this.getMovies();
  }

  getMovies(criteria?: any): void {
    const params = {
      relevant: false,
      ...criteria
    };

    this.movieService.getMoviesBy(params)
      .subscribe(this.receiveMovies);
  }

  onDeleteMovie(): void {
    this.getMovies();
  }

  deleteMovie(event, id: string): void {
    event.stopPropagation();
    this.movieService.deleteMovie(id)
      .subscribe(this.onDeleteMovie);
  }

  receiveMovies(movies: Movie[]): void {
    this.movies = movies;
  }
}
