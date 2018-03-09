import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})

export class MovieDetailsComponent implements OnInit {
  movie: Movie = new Movie();
  isEditing: boolean;
  POSTER_PLACEHOLDER_URL = 'http://via.placeholder.com/400x500';

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.isEditing = this.route.snapshot.paramMap.get('id') !== 'add';
    this.getMovie();
  }

  prepareMovie(movie): void {
    movie.startShowDate = movie.startShowDate.split('T')[0];
    movie.endShowDate = movie.endShowDate.split('T')[0];
    this.movie = movie;
  }

  getMovie(): void {
    if (!this.isEditing) {
      return;
    }
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieById(id).subscribe(movie => this.prepareMovie(movie));
  }

  saveMovie(): void {
    this.movieService.addMovie(this.movie).subscribe();
  }

  updateMovie(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.updateMovie(id, this.movie).subscribe();
  }

}
