import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cinema } from '../cinema';
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-cinema-details',
  templateUrl: './cinema-details.component.html',
  styleUrls: ['./cinema-details.component.scss']
})
export class CinemaDetailsComponent implements OnInit {
  cinema: Cinema;
  isEditing: boolean;

  constructor(
    private cinemaService: CinemaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== 'add') {
      this.isEditing = true;
      this.getCinema();
    } else {
      this.isEditing = false;
      this.cinema = new Cinema();
    }
  }

  getCinema(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.cinemaService.getCinemaById(id)
      .subscribe(cinema => this.cinema = cinema);
  }

  updateCinema(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // todo alert of success or failure
    this.cinemaService.updateCinema(id, this.cinema).subscribe();
  }

  saveCinema(): void {
    if (!this.cinema.name || !this.cinema.city) {
      // todo: alert of error
      return;
    }
    this.cinemaService.createCinema(this.cinema)
      .subscribe(() => this.router.navigate(['/cinemas']));
  }

  onSave(): void {
    this.isEditing ? this.updateCinema() : this.saveCinema();
  }
}
