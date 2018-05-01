import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap';
import { AdditionsService } from './additions.service';
import { AdditionsComponent } from './additions.component';
import { AdditionsSearchBarComponent } from './additions-search-bar/additions-search-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule
  ],
  declarations: [
    AdditionsComponent,
    AdditionsSearchBarComponent
  ],
  providers: [
    AdditionsService
  ]
})
export class AdditionalServicesModule { }
