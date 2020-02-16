import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './general/general.component';
import { SalonFirstComponent } from './salon-first/salon-first.component';
import { SalonSecondComponent } from './salon-second/salon-second.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';
import { AutosaleDirective } from './autosale.directive';



@NgModule({
  declarations: [GeneralComponent, SalonFirstComponent, SalonSecondComponent, AutosaleDirective],
  exports: [
    GeneralComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ]
})
export class AutosaleModule { }
