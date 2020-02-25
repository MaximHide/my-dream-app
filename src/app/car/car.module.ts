import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListComponent } from './car-list/car-list.component';
import {RouterModule} from '@angular/router';
import { CarDetailsComponent } from './car-details/car-details.component';



@NgModule({
  declarations: [CarListComponent, CarDetailsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CarListComponent
  ]
})
export class CarModule { }
