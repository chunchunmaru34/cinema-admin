import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CustomFormsModule } from 'ng2-validation';
import { CinemasComponent } from './cinemas/cinemas.component';
import { CinemaService } from './cinema.service';
import { CinemaDetailsComponent } from './cinema-details/cinema-details.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomEditorComponent } from './room-editor/room-editor.component';
import { RowListComponent } from './row-list/row-list.component';
import { RowComponent } from './row/row.component';
import { SeatsTypeService } from '../seats-types/seats-type.service';
import { CinemaSearchBarComponent } from './cinema-search-bar/cinema-search-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    CustomFormsModule,
  ],
  declarations: [
    CinemasComponent,
    CinemaDetailsComponent,
    RoomListComponent,
    RoomEditorComponent,
    RowListComponent,
    RowComponent,
    CinemaSearchBarComponent
  ],
  providers: [
    CinemaService,
    SeatsTypeService
  ]
})
export class CinemaModule { }
