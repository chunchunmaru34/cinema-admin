import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OthersEntitiesPageComponent } from './others-entities-page/others-entities-page.component';
import { SeatsTypesComponent } from './seats-types/seats-types.component';
import { AdditionsComponent } from './additions/additions.component';
import { UsersComponent } from './users/users.component';
import { AdditionsService } from '../movie-session/additions.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    OthersEntitiesPageComponent,
    SeatsTypesComponent,
    AdditionsComponent,
    UsersComponent
  ],
  providers: [
    AdditionsService
  ]
})
export class OthersEntitiesPageModule { }
