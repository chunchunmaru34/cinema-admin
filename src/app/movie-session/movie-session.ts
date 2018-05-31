import { Movie } from '../movie/movie';
import { MovieSessionAddition } from './movie-sessions-addition';
import { Room } from '../cinema/room';

export class MovieSession {
  id: string;
  room: Room;
  roomId: number;
  movie: Movie;
  movieId: number;
  date: Date;
  price: number;
  movieSessionAdditions: MovieSessionAddition[];

  constructor() {
    this.movieSessionAdditions = [];
  }
}
