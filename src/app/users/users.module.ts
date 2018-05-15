import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AlertModule } from 'ngx-bootstrap/alert';

import { UsersComponent } from './users.component';
import { UsersService } from './user.service';
import { UsersSearchBarComponent } from './users-search-bar/users-search-bar.component';
import { AlertsModule } from '../util-components/alerts/alerts.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    AlertsModule,
  ],
  declarations: [
    UsersComponent,
    UsersSearchBarComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
