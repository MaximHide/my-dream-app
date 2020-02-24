import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChildComponent} from '../family-module/child/child.component';
import {ParentComponent} from '../family-module/parent/parent.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';



@NgModule({
  declarations: [
    ChildComponent,
    ParentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    ChildComponent,
    ParentComponent
  ]
})
export class FamilyModule {}
