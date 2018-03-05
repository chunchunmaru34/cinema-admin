import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { CinemaService } from '../../cinema/cinema.service';
import { Cinema } from '../../cinema/cinema';

@Component({
  selector: 'app-cinema-list',
  templateUrl: './cinema-list.component.html',
  styleUrls: ['./cinema-list.component.scss']
})
export class CinemaListComponent implements OnInit {
  cinemas: Cinema[];
  @Output() cinemaSelect = new EventEmitter<string>();
  constructor(private cinemaService: CinemaService) { }

  ngOnInit() {
    this.getCinemas();
  }

  getCinemas() {
    this.cinemaService.getCinemas().subscribe(cinemas => this.cinemas = cinemas);
  }

  select(cinema) {
    this.cinemaSelect.emit(cinema);
  }

}
