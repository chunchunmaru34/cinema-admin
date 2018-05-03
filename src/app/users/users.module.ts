import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AlertModule } from 'ngx-bootstrap/alert';
import { UsersComponent } from './users.component';
import { UsersService } from './user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersSearchBarComponent } from './users-search-bar/users-search-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
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
