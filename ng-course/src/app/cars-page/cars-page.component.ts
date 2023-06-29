import {Component, OnInit} from "@angular/core";
import {CarsService} from "../cars.servise";

@Component({
  selector: 'app-cars-page',
  templateUrl: `./cars-page.component.html`,
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent implements OnInit {
  cars: any = [];

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.cars = this.carsService.cars
  }
}
