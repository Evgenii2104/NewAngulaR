import {Component} from '@angular/core';
import {divTrigger} from "./app.animation";
import {AnimationEvent} from "@angular/animations";


@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
  styleUrls: ['./app.component.css'],
  animations: [divTrigger]
})
export class AppComponent {
  isVisible = false;

  onAnimationStart(event: AnimationEvent) {
    console.log('Start: ', event)
  }

  onAnimationDone(event: AnimationEvent) {
    console.log('Done: ', event)
  }
}
