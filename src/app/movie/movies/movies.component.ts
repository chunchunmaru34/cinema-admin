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

  sortingOrder: object;
  defaultSortingOrder = {
    title: 0,
    startShowDate: 0,
    endShowDate: 0,
  };

  ITEMS_PER_PAGE = ITEMS_PER_PAGE;

  MOVIES_ROUTE = MOVIES_ROUTE;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.sortingOrder = { ...this.defaultSortingOrder };

    this.getMovies = this.getMovies.bind(this);
    this.receiveMovies = this.receiveMovies.bind(this);

    this.getMovies();
  }

  getMovies(criteria?: any): void {
    const params = {
      relevant: false,
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

  sort(parameterName: string): void {
    // Reset page to 1 after sorting
    this.resetPage();
    const params = {
      page: 1,
    };

    switch (this.sortingOrder[parameterName]) {
      case 0:
        this.sortingOrder[parameterName] = 1;
        break;
      case 1:
        this.sortingOrder[parameterName] = -1;
        break;
      case -1:
        this.sortingOrder[parameterName] = 0;
        params['sort-by'] = null;
        params['sort-order'] = null;
        break;
      default:
        this.sortingOrder[parameterName] = this.defaultSortingOrder[parameterName];
    }

    // Reset other sorting, because we can sort only by 1 param
    const sortingOrder = { ...this.defaultSortingOrder };
    sortingOrder[parameterName] =  this.sortingOrder[parameterName];
    this.sortingOrder = sortingOrder;

    params['sort-by'] = parameterName;
    params['sort-order'] = this.sortingOrder[parameterName];

    this.getMovies(params);
  }
}
