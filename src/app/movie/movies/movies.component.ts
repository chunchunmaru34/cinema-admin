import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { MOVIES_ROUTE } from '../../../constants/routes';
import List from '../../../classes/list/List';
import { NO_SORTING, ASCENDING, DESCENDING } from '../../../classes/list/constants/sorting-orders';
import { ASCENDING_SYMBOL, DESCENDING_SYMBOL } from '../../../classes/list/constants/sorting-symbols';
import { MAX_PAGINATION_SIZE } from '../../../constants/pagination';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent extends List<Movie> {
  MOVIES_ROUTE = MOVIES_ROUTE;

  MAX_PAGINATION_SIZE = MAX_PAGINATION_SIZE;

  ASCENDING = ASCENDING;
  DESCENDING = DESCENDING;
  NO_SORTING = NO_SORTING;

  ASCENDING_SYMBOL = ASCENDING_SYMBOL;
  DESCENDING_SYMBOL = DESCENDING_SYMBOL;

  constructor(movieService: MovieService) {
    super();
    this.service = movieService;
    this.defaultSortingOrder = {
      title: NO_SORTING,
      startShowDate: NO_SORTING,
      endShowDate: NO_SORTING,
    };
  }

  deleteMovie(event, id: string) {
    event.stopPropagation();
    this.deleteItem(id);
  }
}
