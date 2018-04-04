export class Movie {
  id: number;
  title: string;
  description: string;
  year: number;
  director: string;
  actors: string[];
  rating: number;
  posterUrl: string;
  startShowDate: Date;
  endShowDate: Date;

  constructor() {
    this.actors = [];
  }
}
