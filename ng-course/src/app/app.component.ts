import {Component} from '@angular/core';
import {changeWidthTrigger, divTrigger} from "./app.animation";


@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
  styleUrls: ['./app.component.css'],
  animations: [divTrigger, changeWidthTrigger]
})
export class AppComponent {
  isVisible = false;
}
