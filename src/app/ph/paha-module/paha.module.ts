import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ParentComponent} from "../parent/parent.component";
import {ChildComponent} from "../child/child.component";
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../../material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent
  ],
  exports: [
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ]
})
export class PahaModule {

}
