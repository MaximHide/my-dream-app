import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import {AppForRoutingExampleModule} from './app-for-routing-example.module';
import {MaterialModule} from '../material.module';
import {FourthComponentComponent} from './fourth-component/fourth-component.component';



@NgModule({
  declarations: [FirstComponentComponent, SecondComponentComponent, ThirdComponentComponent, FourthComponentComponent],
  imports: [
    CommonModule,
    AppForRoutingExampleModule,
    MaterialModule
  ]
})
export class ForRoutingExamplesModule { }
