import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {PowPipe} from "./pow.pipe";
import {CarFilterPipe} from "./car-filter.pipr";




@NgModule({
  declarations: [
    AppComponent,
    PowPipe,
    CarFilterPipe
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
