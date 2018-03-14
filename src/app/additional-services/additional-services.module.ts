import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdditionsService } from './additions.service';
import { AdditionsComponent } from './additions.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    AdditionsComponent
  ],
  providers: [
    AdditionsService
  ]
})
export class AdditionalServicesModule { }
