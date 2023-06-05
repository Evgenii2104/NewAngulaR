import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {

  carName = ''
  carYear = 2017;
  @Output('onAddCar') carEmiter = new EventEmitter<{name: string, year: number}>()

  constructor() {
  }

  addCar() {
    this.carEmiter.emit({
      name: this.carName,
      year: this.carYear
    })

    this.carName = '',
      this.carYear = 2017

  }
}
