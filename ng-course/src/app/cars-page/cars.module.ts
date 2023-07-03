import {NgModule} from "@angular/core";
import {CarsPageComponent} from "./cars-page.component";
import {CarPageComponent} from "../car-page/car-page.component";
import {CarsService} from "../cars.servise";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {CaesRoutingModule} from "./caes-routing.module";

@NgModule({
  declarations: [
    CarsPageComponent,
    CarPageComponent,
  ],
  imports: [
    CommonModule,
    CaesRoutingModule,
    SharedModule
  ],
  providers: [CarsService]
})

export class CarsModule {

}
