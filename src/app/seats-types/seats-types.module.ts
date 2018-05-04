import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import { SeatsTypesComponent } from './seats-types.component';
import { SeatsTypeService } from './seats-type.service';
import { SeatsTypesSearchBarComponent } from './seats-types-search-bar/seats-types-search-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    PaginationModule
  ],
  declarations: [
    SeatsTypesComponent,
    SeatsTypesSearchBarComponent
  ],
  providers: [
    SeatsTypeService
  ]
})
export class SeatsTypesModule { }
