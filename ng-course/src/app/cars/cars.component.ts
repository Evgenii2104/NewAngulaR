import {Component} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {




    cars : [{ year: number; name: string }, /*{ year: number; name: string }, { year: number; name: string }*/] = [{
    name: 'Ford',
    year: 2015
  }, /*{
    name: 'Mazda',
    year: 2010
  }, {
    name: "Audi",
    year: 2017
  }*/
  ]
  constructor() {

  }
  updateCarList(car: {name: string, year: number}) {
    this.cars.push(car)
  }

  chengCarNamr() {
      this.cars[0].name = 'new car Name!'
  }
}
