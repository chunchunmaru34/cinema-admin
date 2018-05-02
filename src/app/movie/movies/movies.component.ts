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
  MOVIES_ROUTE = MOVIES_ROUTE;

  constructor(movieService: MovieService) {
    super();
    this.service = movieService;
    this.defaultSortingOrder = {
      title: 0,
      startShowDate: 0,
      endShowDate: 0,
    };
  }

  deleteMovie(event, id: string) {
    event.stopPropagation();
    this.deleteItem(id);
  }
}
