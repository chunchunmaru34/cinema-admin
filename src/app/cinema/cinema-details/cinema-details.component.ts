import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Cinema } from '../cinema';
import { CinemaService } from '../cinema.service';
import {
  CINEMA_FAILED_UPDATE_MESSAGE,
  CINEMA_SUCCESSFUL_UPDATE_MESSAGE,
} from '../../../constants/alert-messages';
import { CINEMAS_ROUTE } from '../../../constants/routes';
import {
  ERROR_FADING_TIMEOUT,
  INFO_FADING_TIMEOUT
} from '../../../constants/alerts-config';

@Component({
  selector: 'app-cinema-details',
  templateUrl: './cinema-details.component.html',
  styleUrls: ['./cinema-details.component.scss']
})
export class CinemaDetailsComponent implements OnInit {
  cinema: Cinema = new Cinema();
  isEditing: boolean;

  info: string | null;
  error: string | null;
  timer: any;

  constructor(
    private cinemaService: CinemaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.handleSuccessfulUpdate = this.handleSuccessfulUpdate.bind(this);
    this.handleError = this.handleError.bind(this);
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'add') {
      this.isEditing = true;
      this.getCinema();
    } else {
      this.isEditing = false;
    }
  }

  getCinema(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.cinemaService.getById(id)
      .subscribe(cinema => this.cinema = cinema);
  }

  updateCinema(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.cinemaService.update(id, this.cinema)
      .subscribe(
        this.handleSuccessfulUpdate,
        this.handleError,
      );
  }

  saveCinema(): void {
    this.cinemaService.create(this.cinema)
      .subscribe(
        () => this.router.navigate([CINEMAS_ROUTE]),
        this.handleError,
      );
  }

  onSave(): void {
    this.isEditing ? this.updateCinema() : this.saveCinema();
  }

  handleSuccessfulUpdate(): void {
    this.getCinema();
    clearTimeout(this.timer);
    this.error = null;
    this.info = CINEMA_SUCCESSFUL_UPDATE_MESSAGE;
    this.timer = setTimeout(() => this.info = null, INFO_FADING_TIMEOUT);
  }

  handleError(httpError: HttpErrorResponse): void {
    this.info = null;
    this.error = httpError.error.message || CINEMA_FAILED_UPDATE_MESSAGE;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.error = null, ERROR_FADING_TIMEOUT);
  }
}
