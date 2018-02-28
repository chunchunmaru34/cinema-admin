import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {MoviesComponent} from './movies/movies.component';
import {MovieService} from './movie.service';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MovieDetailsComponent,
    MoviesComponent
  ],
  providers: [
    MovieService
  ],
})
export class MovieModule { }
