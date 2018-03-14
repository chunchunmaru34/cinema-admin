import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router
  ) {
  }

  ngOnInit() {
    this.isEditing = this.route.snapshot.paramMap.get('id') !== 'add';
    this.getMovie();
  }

  prepareMovie(movie): void {
    this.movie = movie;
  }

  getMovie(): void {
    if (!this.isEditing) {
      return;
    }
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieById(id)
      .subscribe(movie => this.prepareMovie(movie));
  }

  onSave() {
    this.isEditing ? this.updateMovie() : this.saveMovie();
  }

  saveMovie(): void {
    this.movieService.addMovie(this.movie)
      .subscribe(() => this.router.navigate(['/movies']));
  }

  updateMovie(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.updateMovie(id, this.movie)
      .subscribe();
  }
}
