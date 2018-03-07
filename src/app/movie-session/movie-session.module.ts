import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieSessionComponent } from './movie-sessions-list/movie-session.component';
import { RouterModule } from '@angular/router';
import { MovieSessionService } from './movie-session.service';
import { MovieSessionDetailsComponent } from './movie-session-details/movie-session-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CinemaListComponent } from './cinema-list/cinema-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    MovieSessionComponent,
    MovieSessionDetailsComponent,
    MovieListComponent,
    CinemaListComponent
  ],
  providers: [MovieSessionService]
})
export class MovieSessionModule { }
