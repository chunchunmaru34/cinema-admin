import { Movie } from '../movie/movie';
import { Cinema } from '../cinema/cinema';
import { Addition } from '../additional-services/addition';

export class MovieSession {
  id: string;
  cinema: Cinema;
  movie: Movie;
  date: string;
  price: number;
  additions: Addition[];

  constructor() {
    this.additions = [];
  }
}
