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

  totalItems: number;
  itemsLimit: number;
  pages: number;

  lastSearchCriteria = {};

  ITEMS_PER_PAGE = 10;

  MOVIES_ROUTE = MOVIES_ROUTE;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies = this.getMovies.bind(this);
    this.receiveMovies = this.receiveMovies.bind(this);
    this.getMovies();
  }

  getMovies(criteria?: any): void {
    const params = {
      limit: this.ITEMS_PER_PAGE,
      ...this.lastSearchCriteria,
      ...criteria
    };
    this.lastSearchCriteria = params;

    this.movieService.getMoviesBy(params)
      .subscribe(this.receiveMovies);
  }

  deleteMovie(event, id: string): void {
    event.stopPropagation();
    this.movieService.deleteMovie(id)
      .subscribe(() => this.getMovies());
  }

  receiveMovies(movies: any): void {
    this.movies = movies.data;
    this.totalItems = movies.total;
    this.itemsLimit = movies.limit;
    this.pages = movies.pages;
  }

  handlePageChange({ page }): void {
    this.getMovies({ page });
  }
}
