import { Movie } from '../movie/movie';
import { Cinema } from '../cinema/cinema';

export class MovieSession {
  id: string;
  cinema: Cinema;
  movie: Movie;
  date: string;
  price: number;
  additions: any;
}
