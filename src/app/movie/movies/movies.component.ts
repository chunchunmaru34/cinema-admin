import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { MOVIES_ROUTE } from '../../../constants/routes';
import { ITEMS_PER_PAGE } from '../../../constants/lists-config';

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
  page = 1;

  lastSearchCriteria = {};

  ITEMS_PER_PAGE = ITEMS_PER_PAGE;

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
      limit: this.ITEMS_PER_PAGE,
      ...this.lastSearchCriteria,
    };
    this.lastSearchCriteria = params;

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

  receiveMovies(movies: any): void {
    if (this.page !== movies.page) {
      return;
    }
    this.movies = movies.data;
    this.totalItems = movies.total;
    this.itemsLimit = movies.limit;
    this.pages = movies.pages;
  }

  handlePageChange({ page }): void {
    this.page = page;
    this.getMovies({ page });
  }

  resetPage(): void {
    this.page = 1;
  }
}
