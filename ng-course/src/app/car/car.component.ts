import {Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

// @ts-ignore
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit, OnChanges{

 // @ts-ignore
  @Input('carItem') car: {name: string, year: number};
  // @ts-ignore
  @Input() name: string
  // @ts-ignore
  @ContentChild('carHeading') carHeading: ElementRef;

constructor() {
  console.log('constructor')
}

ngOnInit() {
  console.log('ngOnInit')
}

ngOnChanges(changes: SimpleChanges) {
  console.log('ngOnChanges', changes)
}

}
