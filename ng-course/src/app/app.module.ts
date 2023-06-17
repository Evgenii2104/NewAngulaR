import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {CarComponent} from "./car/car.component";
import {CarAddComponent} from "./car-add/car-add.component";
import {ConsoleService} from "./console.service";



@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarAddComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [ConsoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
