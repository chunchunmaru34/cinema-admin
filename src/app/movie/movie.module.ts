import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieService } from './movie.service';
import { ActorsListComponent } from './actors-list/actors-list.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CustomFormsModule,
    BsDatepickerModule.forRoot(),
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
