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

  color = [
    'red',
    'blue',
    'green',
    'pink',
    'yellow',
    'grey'
  ]
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
       },
        (error) => {
          alert(error)
        })
  }

  addCar() {

    // @ts-ignore
    this.carsService.addCar(this.carName).subscribe((car: Cars) => {
      this.cars.push(car)
    });
    this.carName = ''
  }

  getRandColor() {
    const num = Math.round(Math.random() * (this.color.length - 1));
    return this.color[num]
  }

  setNewColor(car: Cars) {
    this.carsService.changeColor(car, this.getRandColor())
      .subscribe((data) => {
        console.log(data)
      })
  }

  deleteCar(car: Cars) {
    this.carsService.deleteCar(car)
      .subscribe((data) => {
        this.cars = this.cars.filter(c => c.id !== car.id)
      })
  }
}
