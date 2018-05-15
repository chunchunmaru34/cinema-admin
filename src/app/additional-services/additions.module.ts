import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AdditionsService } from './additions.service';
import { AdditionsComponent } from './additions.component';
import { AdditionsSearchBarComponent } from './additions-search-bar/additions-search-bar.component';
import { AlertsModule } from '../util-components/alerts/alerts.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    PaginationModule.forRoot(),
    AlertsModule
  ],
  exports: [
    AdditionsSearchBarComponent
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
