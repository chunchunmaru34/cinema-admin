import { Component, EventEmitter, Output } from '@angular/core';
import { MovieService } from '../../movie/movie.service';
import { Movie } from '../../movie/movie';
import List from '../../../classes/list/List';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent extends List<Movie> {
  @Output() movieSelectEvent = new EventEmitter<string>();

  constructor(movieService: MovieService) {
    super();
    this.service = movieService;
    this.defaultSortingOrder = {
      title: 0
    };
    this.itemsPerPage = 4;
  }

  select(movie): void {
    this.movieSelectEvent.emit(movie);
  }
}
