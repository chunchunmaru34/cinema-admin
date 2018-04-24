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
    this.onDeleteCinema = this.onDeleteCinema.bind(this);
    this.getCinemas();
  }

  getCinemas(criteria?: any): void {
    const params = {
      ...criteria,
    };

    this.cinemaService.getCinemasBy(params)
      .subscribe(this.receiveCinemas);
  }

  onDeleteCinema(): void {
    this.getCinemas();
  }

  deleteCinema(event, id: string): void {
    event.stopPropagation();
    this.cinemaService.deleteCinema(id)
      .subscribe(this.onDeleteCinema);
  }

  receiveCinemas(cinemas: Cinema[]) {
    this.cinemas = cinemas;
  }
}
