import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  OnDestroy
} from '@angular/core';

// @ts-ignore
// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy
{

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

ngDoCheck() {
  console.log('ngDoCheck')
}

ngAfterViewInit() {
  console.log('ngAfterViewInit')
}

ngAfterViewChecked() {
  console.log('ngAfterViewChecked')
}

ngAfterContentInit() {
  console.log('AfterContentInit')
}

ngAfterContentChecked() {
  console.log('ngAfterContentChecked')
}

ngOnDestroy() {
console.log('ngOnDestroy')
}
}
