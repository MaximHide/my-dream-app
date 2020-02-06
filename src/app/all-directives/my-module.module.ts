import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ParentTwoComponent} from './parent/parent-two.component';
import {ChildOneComponent} from './child-one/child-one.component';
import {ChildTwoComponent} from './child-two/child-two.component';
import {ChildThreeComponent} from './child-three/child-three.component';
import {MaterialModule} from '../material.module';


@NgModule({
  declarations: [ParentTwoComponent, ChildOneComponent, ChildTwoComponent, ChildThreeComponent],
  imports: [
    CommonModule,
    MaterialModule
  ], exports: [
    ParentTwoComponent, ChildOneComponent, ChildTwoComponent, ChildThreeComponent
  ]
})
export class MyModuleModule {
}
