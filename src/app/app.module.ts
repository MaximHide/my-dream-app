
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {PahaModule} from "./ph/paha-module/paha.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PahaModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
