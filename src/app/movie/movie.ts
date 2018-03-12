export class Movie {
  id: number;
  title: string;
  description: string;
  year: number;
  director: string;
  actors: string[];
  rating: number;
  aired: boolean;
  posterUrl: string;
  startShowDate: string;
  endShowDate: string;

  constructor() {
    this.actors = [];
    this.startShowDate = '';
    this.endShowDate = '';
  }
}
