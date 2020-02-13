import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DirectiveModule} from './directives/directive.module';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material';
import {MyModuleModule} from './all-directives/my-module.module';
import {MyModuleTwoModule} from './own-directive-pipes/my-module-two.module';
import {NoRoutComponent} from './shared/no-rout/no-rout.component';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NoRoutComponent, DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DirectiveModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MyModuleModule,
    MyModuleTwoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
