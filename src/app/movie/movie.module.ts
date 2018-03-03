import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {MoviesComponent} from './movies/movies.component';
import {MovieService} from './movie.service';
import {RouterModule} from '@angular/router';
import { ActorsListComponent } from './actors-list/actors-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    MovieDetailsComponent,
    MoviesComponent,
    ActorsListComponent
  ],
  providers: [
    MovieService
  ],
})
export class MovieModule { }
