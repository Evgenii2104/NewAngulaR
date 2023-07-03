import {NgModule} from "@angular/core";
import {ColorDirective} from "./color.derective";

@NgModule({
  declarations: [
    ColorDirective
  ],
  exports: [
    ColorDirective
  ]
})

export class SharedModule {

}
