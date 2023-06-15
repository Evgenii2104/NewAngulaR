import { Component } from '@angular/core';
import {delay, Observable, of} from "rxjs";


@Component({
  selector: 'app-root',
  template: `<div class="col-xs-8 col-xs-offset-2">
    <h1>{{ asyncTitle | async }}</h1>
    <input type="text" class="form-control" [(ngModel)]="searchCar">
    <button class="btn btn-primary" (click)="addCar()">Добавить</button>
    <hr>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let car of cars | carFilter: searchCar:'name'; let i = index">
        <b>{{ i + 1 }}</b> {{ car.name}}
        <i>{{ car.descr}}</i>
      </li>
    </ul>
  </div> `
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchCar = ''
  cars = [
    {name: 'Ford', descr: 'wf 1'},
    {name: 'Mazda', descr: 'wf 2'},
    {name: 'Bentley', descr: 'wf 3'},
    {name: 'Audi', descr: 'wf 4'},
    {name: 'Mercedes', descr: 'wf 5'},
    {name: 'BMW', descr: 'wf 6'}
  ]

  asyncTitle = of('Async title 3 seconds')
    .pipe(delay(3000));


  addCar() {
    this.cars.push({
      name: 'New Car',
      descr: 'wf'
    })
  }
}
