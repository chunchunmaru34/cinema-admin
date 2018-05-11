import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap';
import { UsersComponent } from './users.component';
import { UsersService } from './user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersSearchBarComponent } from './users-search-bar/users-search-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule
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
