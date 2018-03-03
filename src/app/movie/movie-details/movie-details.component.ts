import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import {MovieService} from '../movie.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie = new Movie();
  isEditing: boolean;
  isSaveable: boolean = !!this.movie.title;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.isEditing = this.route.snapshot.paramMap.get('id') !== 'add';
    this.getMovie();
  }

  // todo: think of better solutions
  prepareMovie(movie): void {
    movie.startShowDate = movie.startShowDate.split('T')[0];
    movie.endShowDate = movie.endShowDate.split('T')[0];
    this.movie = movie;
  }

  getMovie(): void {
    console.log('getting');
    if (!this.isEditing) {
      return;
    }
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieById(id).subscribe(movie => this.prepareMovie(movie));
  }

  saveMovie(): void {
    console.log(this.movie);
    this.movieService.addMovie(this.movie).subscribe();
  }

  updateMovie(): void {
    console.log('updating');
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.updateMovie(id, this.movie).subscribe();
  }

}
