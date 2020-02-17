import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DirectiveModule} from './directives/directive.module';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material';
import {ShowroomModule} from './carShowRoom/showroom.module';
import {ShowroomService} from './carShowRoom/showroom.service';
import {ShowroomDirective} from './showroom.directive';

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
    ShowroomModule,
    // ShowroomDirective
  ],
  providers: [ShowroomService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
