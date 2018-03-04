import { Addition } from './addition';

export class MovieSession {
  id: string;
  cinemaId: string;
  movieId: string;
  date: string;
  price: number;
  additions: Addition[];

  constructor() {
    this.additions = [];
  }
}
