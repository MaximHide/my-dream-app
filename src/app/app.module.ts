import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DirectiveModule} from './directives/directive.module';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material';
import {AutosaleModule} from "./autosale/autosale.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectiveModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    AutosaleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
