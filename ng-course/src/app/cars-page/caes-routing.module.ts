import {NgModule} from "@angular/core";
import {Route, RouterModule, Routes} from "@angular/router";
import {CarsPageComponent} from "./cars-page.component";
import {CarPageComponent} from "../car-page/car-page.component";

const carsRouts: Routes = [
  { path: '', component: CarsPageComponent, children: [
      { path: ':id/:name', component: CarPageComponent }
    ] }
]

@NgModule({
  imports: [
    RouterModule.forChild(carsRouts)
  ],
  exports: [
    RouterModule
  ]
})
export class CaesRoutingModule {

}
