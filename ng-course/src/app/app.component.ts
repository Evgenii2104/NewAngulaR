import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: `app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  answers = [{
    type: 'yes',
    text: 'да'
  }, {
    type: 'no',
    text: 'нет'
  }];

  charsCount = 5;
  // @ts-ignore
  form: FormGroup;

  ngOnInit() {

    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email], this.checkForEmail),
        pass: new FormControl('', [Validators.required, this.checkForLength.bind(this)])
      }),
      country: new FormControl('ru'),
      answer: new FormControl('no')
    })
  }

  onSubmit() {
    console.log('submited', this.form)
  }

  checkForLength(control: AbstractControl) {
    if (control.value.length <= this.charsCount) {
      return {
        'lengthError': true
      };
    }
    return null
  }

  checkForEmail(control: AbstractControl): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@mail.ru') {
          resolve({
            'emailIsUsed': true
          });
        } else {
          resolve(null);
        }
      }, 3000)
    })
  }
}
