import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirsSalonComponent} from './firs-salon/firs-salon.component';
import {SecondSalonComponent} from './second-salon/second-salon.component';
import {ParentSalonComponent} from './parent-salon/parent-salon.component';
import {MatButtonModule} from '@angular/material/button';
import {ShowroomDirective} from '../showroom.directive';
import { ChangeCurrencyPipe } from './change-currency.pipe';
import { ColorgridComponent } from './colorgrid/colorgrid.component';
import { GridDirectiveDirective } from './colorgrid/grid-directive.directive';
import {MatGridListModule} from '@angular/material';
@NgModule({
  declarations: [FirsSalonComponent, SecondSalonComponent, ParentSalonComponent, ShowroomDirective, ChangeCurrencyPipe, ColorgridComponent, GridDirectiveDirective],
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
  ],
  exports: [FirsSalonComponent, SecondSalonComponent, ParentSalonComponent ]
})
export class ShowroomModule {
}
