import {Component, OnInit} from '@angular/core';
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
export class AppComponent implements OnInit {

  color = [
    'red',
    'blue',
    'green',
    'pink',
    'yellow',
    'grey'
  ]
  cars: any;
  carName: string = '';
  appTitle: any;

  constructor(private carsService: CarsServise) { }

  ngOnInit() {
    this.appTitle = this.carsService.getAppTitle();
  }

  loadCars() {
    this.cars = this.carsService.getCars()

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
        // @ts-ignore
        this.cars = this.cars.filter(c => c.id !== car.id)
      })
  }
}
