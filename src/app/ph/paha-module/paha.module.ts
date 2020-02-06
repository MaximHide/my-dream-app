import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ParentComponent} from "../parent/parent.component";
import {ChildComponent} from "../child/child.component";
import {FormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatButtonToggleModule} from "@angular/material/button-toggle";


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
    MatTableModule,
    MatButtonToggleModule
  ]
})
export class PahaModule {

}
