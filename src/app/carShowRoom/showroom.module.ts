import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirsSalonComponent} from './firs-salon/firs-salon.component';
import {SecondSalonComponent} from './second-salon/second-salon.component';
import {ParentSalonComponent} from './parent-salon/parent-salon.component';
import {MatButtonModule} from '@angular/material/button';
import {ShowroomDirective} from '../showroom.directive';
@NgModule({
  declarations: [FirsSalonComponent, SecondSalonComponent, ParentSalonComponent, ShowroomDirective],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [FirsSalonComponent, SecondSalonComponent, ParentSalonComponent ,]
})
export class ShowroomModule {
}
