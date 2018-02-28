import { Component, OnInit } from '@angular/core';
import {Cinema} from '../cinema';
import {CinemaService} from '../cinema.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cinema-details',
  templateUrl: './cinema-details.component.html',
  styleUrls: ['./cinema-details.component.scss']
})
export class CinemaDetailsComponent implements OnInit {
  cinema: Cinema;

  constructor(
    private cinemaService: CinemaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCinema();
  }

  getCinema(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.cinemaService.getCinemaById(id).subscribe(cinema => this.cinema = cinema);
  }

}
