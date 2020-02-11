import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentMainComponent} from './component-main/component-main.component';
import {MaterialModule} from '../material.module';
import { MyPipePipe } from './my-pipe.pipe';
import {FormsModule} from '@angular/forms';
import { MyDirectiveDirective } from './my-directive.directive';


@NgModule({
  declarations: [ComponentMainComponent, MyPipePipe, MyDirectiveDirective],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ], exports: [ComponentMainComponent]
})
export class MyModuleTwoModule {
}
