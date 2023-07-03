import {Component, NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {CarsPageComponent} from "./cars-page/cars-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {CarPageComponent} from "./car-page/car-page.component";
import {NotFaundComponent} from "./not-faund.component/not-faund.component";
import {AuthGuard} from "./auth-guard.service";
import {NewPageComponent} from "./new-page/new-page.component";

const appRoutes: Routes = [
  { path: 'cars', component: CarsPageComponent, canActivate: [AuthGuard], children: [
      { path: ':id/:name', component: CarPageComponent}
    ]},
  //{ path: 'cars/:id/:name', component: CarPageComponent},
  { path: '', component: HomePageComponent},
  { path: 'new', component: NewPageComponent},
  { path: 'not-faund', component: NotFaundComponent},
  { path:'**', redirectTo: '/not-faund'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
