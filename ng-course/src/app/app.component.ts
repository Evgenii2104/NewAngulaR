import {Component} from '@angular/core';
import {CarsServise} from "./cars.servise";

interface Cars {
  name: string,
  color: string,
  id: number
};

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cars: Cars[] = [];

  constructor(private carsService: CarsServise) { }


  loadCars() {
    this.carsService
      .getCars()
       .subscribe((cars: Cars[] ) => {
         console.log(cars)
         this.cars = cars
       })
  }
}
