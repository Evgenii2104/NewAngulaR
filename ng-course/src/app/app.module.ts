import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CarsService} from "./cars.servise";
import {HomePageComponent} from "./home-page/home-page.component";
import {CarsPageComponent} from "./cars-page/cars-page.component";
import {AppRoutingModule} from "./app-routing.module";
import {CarPageComponent} from "./car-page/car-page.component";
import {NotFaundComponent} from "./not-faund.component/not-faund.component";
import {AuthService} from "./auth.service";
import {AuthGuard} from "./auth-guard.service";
import {NewPageComponent} from "./new-page/new-page.component";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CarsPageComponent,
    CarPageComponent,
    NotFaundComponent,
    NewPageComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
  providers: [CarsService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
