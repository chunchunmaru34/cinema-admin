import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CinemasComponent} from './cinemas/cinemas.component';
import {CinemaService} from './cinema.service';
import {RouterModule} from '@angular/router';
import { CinemaDetailsComponent } from './cinema-details/cinema-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ CinemasComponent, CinemaDetailsComponent],
  providers: [
    CinemaService
  ]
})
export class CinemaModule { }
