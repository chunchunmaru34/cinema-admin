import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { MOVIES_ROUTE } from '../../../constants/routes';
import List from '../../../classes/list/List';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})

export class MoviesComponent extends List<Movie> {
  defaultSortingOrder = {
    title: 0,
    startShowDate: 0,
    endShowDate: 0,
  };

  MOVIES_ROUTE = MOVIES_ROUTE;

  constructor(movieService: MovieService) {
    super();
    this.service = movieService;
  }

  deleteMovie(event, id: string) {
    event.stopPropagation();
    this.deleteItem(id);
  }
}
