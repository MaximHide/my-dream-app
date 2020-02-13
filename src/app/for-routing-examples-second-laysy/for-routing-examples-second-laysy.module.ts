import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompComponent} from './comp/comp.component';
import {AppForRoutingExampleModule} from './app-for-routing-examples-second-laysy.module';



@NgModule({
  declarations: [CompComponent],
  imports: [
    CommonModule,
    AppForRoutingExampleModule
  ]
})
export class ForRoutingExamplesSecondLaysyModule { }
