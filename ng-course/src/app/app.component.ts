import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ts-ignore
  @ViewChild('form') form: ngForm;

  answers = [{
    type: 'yes',
    text: 'да'
  }, {
    type: 'no',
    text: 'нет'
  }];

  defaultAnswer = 'no';
  defaultCountry = 'ru';

  formData = {};
  isSubmited = false;

  addRendEmail() {
    const randEmail = 'test@gmail.com';
    this.form.form.patchValue({
      user: {email: randEmail}
    })
  }

  submitForm() {
    this.isSubmited = true;
    this.formData = this.form.value;
    this.form.reset()
    console.log('Submited!', this.form)
  }
}
