import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service';
import { Cinema } from '../cinema';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.scss']
})
export class CinemasComponent implements OnInit {
  cinemas: Cinema[];

  constructor(private cinemaService: CinemaService) { }

  ngOnInit() {
    this.getCinemas = this.getCinemas.bind(this);
    this.getCinemas();
  }

  getCinemas(): void {
    this.cinemaService.getCinemas()
      .subscribe(cinemas => this.cinemas = cinemas);
  }

  deleteCinema(event, id: string): void {
    event.stopPropagation();
    this.cinemaService.deleteCinema(id)
      .subscribe(this.getCinemas);
  }
}
