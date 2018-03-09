import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieSessionComponent } from './movie-sessions-list/movie-session.component';
import { MovieSessionService } from './movie-session.service';
import { MovieSessionDetailsComponent  } from './movie-session-details/movie-session-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    MovieSessionComponent,
    MovieSessionDetailsComponent
  ],
  providers: [MovieSessionService]
})
export class MovieSessionModule { }
