import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChildComponent} from '../family-module/child/child.component';
import {ParentComponent} from '../family-module/parent/parent.component';




@NgModule({
  declarations: [
    ChildComponent,
    ParentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChildComponent,
    ParentComponent
  ]
})
export class FamilyModule { }
