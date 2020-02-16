import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainGridComponent } from './main-grid/main-grid.component';
import {MaterialModule} from '../material.module';
import { ColorGridDirective } from './color-grid.directive';



@NgModule({
  declarations: [MainGridComponent, ColorGridDirective],
  exports: [
    MainGridComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class TestGridModule { }
