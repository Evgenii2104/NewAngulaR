import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CarsService} from "./cars.servise";
import {HomePageComponent} from "./home-page/home-page.component";
import {CarsPageComponent} from "./cars-page/cars-page.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CarsPageComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
