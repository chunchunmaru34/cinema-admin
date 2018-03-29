import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatsTypesComponent } from './seats-types.component';
import { SeatsTypeService } from './seats-type.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SeatsTypesComponent
  ],
  providers: [
    SeatsTypeService
  ]
})
export class SeatsTypesModule { }
