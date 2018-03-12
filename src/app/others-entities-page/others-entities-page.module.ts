import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OthersEntitiesPageComponent } from './others-entities-page/others-entities-page.component';
import { SeatsTypesComponent } from './seats-types/seats-types.component';
import { AdditionsComponent } from './additions/additions.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [OthersEntitiesPageComponent, SeatsTypesComponent, AdditionsComponent, UsersComponent]
})
export class OthersEntitiesPageModule { }
