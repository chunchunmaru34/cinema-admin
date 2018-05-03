import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieService } from './movie.service';
import { ActorsListComponent } from './actors-list/actors-list.component';
import { MovieSearchBarComponent } from './movie-search-bar/movie-search-bar.component';
import { PaginationModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CustomFormsModule,
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
  ],
  declarations: [
    MovieDetailsComponent,
    MoviesComponent,
    ActorsListComponent,
    MovieSearchBarComponent
  ],
  providers: [
    MovieService
  ],
  exports: [
    MovieSearchBarComponent
  ]
})
export class MovieModule { }
