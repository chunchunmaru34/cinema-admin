import { Movie } from '../movie/movie';
import { Cinema } from '../cinema/cinema';
import { MovieSessionAddition } from './movie-sessions-addition';

export class MovieSession {
  id: string;
  cinema: Cinema;
  movie: Movie;
  date: string;
  price: number;
  additions: MovieSessionAddition[];

  constructor() {
    this.additions = [];
  }
}
