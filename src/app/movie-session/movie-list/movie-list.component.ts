import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MovieService } from '../../movie/movie.service';
import {Movie} from '../../movie/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  // @Input() selectedMovie: string;
  @Output() movieSelect = new EventEmitter<string>();
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe(movies => this.movies = movies);
  }

  select(movie): void {
    this.movieSelect.emit(movie);
  }

}
