import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  answers = [{
    type: 'yes',
    text: 'да'
  }, {
    type: 'no',
    text: 'нет'
  }]

  submitForm(form: NgForm) {
    console.log('Submited!', form)
  }
}
