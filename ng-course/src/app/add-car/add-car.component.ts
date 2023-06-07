import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {

  @Output('onAddCar') carEmiter = new EventEmitter<{name: string, year: number}>()
  // @ts-ignore
  @ViewChild('carYearInput') carYearInput: ElementRef
  constructor() {
  }

  addCar(carNameEl: HTMLInputElement) {
  //console.log(this.carYearInput)
    this.carEmiter.emit({
      name: carNameEl.value,
      year: +this.carYearInput.nativeElement.value
    })

      carNameEl.value = '',
      this.carYearInput.nativeElement.value = 2017
  }
}
