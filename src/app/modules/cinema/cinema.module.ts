import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CinemasComponent } from './cinemas/cinemas.component';
import { CinemaService } from './cinema.service';
import { CinemaDetailsComponent } from './cinema-details/cinema-details.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomEditorComponent } from './room-editor/room-editor.component';
import { RowListComponent } from './row-list/row-list.component';
import { RowComponent } from './row/row.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    CinemasComponent,
    CinemaDetailsComponent,
    RoomListComponent,
    RoomEditorComponent,
    RowListComponent,
    RowComponent
  ],
  providers: [
    CinemaService
  ]
})
export class CinemaModule { }
