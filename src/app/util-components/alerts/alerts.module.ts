import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AlertStackComponent } from './alert-stack/alert-stack.component';

@NgModule({
  imports: [
    CommonModule,
    AlertModule.forRoot()
  ],
  declarations: [AlertStackComponent],
  exports: [
    AlertStackComponent
  ]
})
export class AlertsModule { }
