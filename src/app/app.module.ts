
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {PahaModuleModule} from "./ph/paha-module/paha-module.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PahaModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
