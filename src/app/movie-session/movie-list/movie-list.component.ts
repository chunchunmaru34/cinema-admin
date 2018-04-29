import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MovieService } from '../../movie/movie.service';
import { Movie } from '../../movie/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  @Output() movieSelect = new EventEmitter<string>();

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getAll()
      .subscribe(movies => this.movies = movies);
  }

  select(movie): void {
    this.movieSelect.emit(movie);
  }
}
