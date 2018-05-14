import { Component, Input, OnInit } from '@angular/core';
import { Alert } from '../Alert';

@Component({
  selector: 'app-alert-stack',
  templateUrl: './alert-stack.component.html',
  styleUrls: ['./alert-stack.component.scss']
})
export class AlertStackComponent implements OnInit {
  @Input() alerts: Alert[];

  removeAlert(index: number) {
    this.alerts.slice(index, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
