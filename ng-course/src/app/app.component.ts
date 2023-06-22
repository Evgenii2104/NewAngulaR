import {Component} from '@angular/core';
import {CarsServise} from "./cars.servise";

interface Cars {
  name: string;
  color: string;
  id: number;
};

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cars: Cars[] = [];
  carName: string = '';

  constructor(private carsService: CarsServise) { }


  loadCars() {
    this.carsService
      .getCars()
      .subscribe((cars ) => {
         console.log(cars)
         // @ts-ignore
        this.cars = cars
       })
  }

  addCar() {

    // @ts-ignore
    this.carsService.addCar(this.carName).subscribe((car: Cars) => {
      this.cars.push(car)
    });
    this.carName = ''
  }
}
