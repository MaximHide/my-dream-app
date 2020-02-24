import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './general/general.component';
import { SalonFirstComponent } from './salon-first/salon-first.component';
import { SalonSecondComponent } from './salon-second/salon-second.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';
import { AutosaleDirective } from './autosale.directive';
import { AutosalePipe } from './autosale.pipe';
import {AppRoutingModule} from '../app-routing.module';



@NgModule({
  declarations: [GeneralComponent, SalonFirstComponent, SalonSecondComponent, AutosaleDirective, AutosalePipe],
  exports: [
    GeneralComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule
  ]
})
export class AutosaleModule { }
