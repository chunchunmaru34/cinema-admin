import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { RouterModule } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { MovieSessionComponent } from './movie-sessions-list/movie-session.component';
import { MovieSessionDetailsComponent } from './movie-session-details/movie-session-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CinemaListComponent } from './cinema-list/cinema-list.component';
import { AdditionsListComponent } from './additions-list/additions-list.component';
import { AdditionsService } from '../additional-services/additions.service';
import { MovieSessionService } from './movie-session.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CustomFormsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
  ],
  declarations: [
    MovieSessionComponent,
    MovieSessionDetailsComponent,
    MovieListComponent,
    CinemaListComponent,
    AdditionsListComponent
  ],
  providers: [
    MovieSessionService,
    AdditionsService
  ]
})
export class MovieSessionModule { }
