import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service';
import { Cinema } from '../cinema';
import { CINEMAS_ROUTE } from '../../../constants/routes';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.scss']
})
export class CinemasComponent implements OnInit {
  cinemas: Cinema[];
  CINEMAS_ROUTE = CINEMAS_ROUTE;

  constructor(private cinemaService: CinemaService) { }

  ngOnInit() {
    this.receiveCinemas = this.receiveCinemas.bind(this);
    this.getCinemas = this.getCinemas.bind(this);
    this.getCinemas();
  }

  getCinemas(): void {
    this.cinemaService.getCinemas()
      .subscribe(this.receiveCinemas);
  }

  deleteCinema(event, id: string): void {
    event.stopPropagation();
    this.cinemaService.deleteCinema(id)
      .subscribe(this.getCinemas);
  }

  receiveCinemas(cinemas: Cinema[]) {
    this.cinemas = cinemas;
  }
}
