import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  countryList = ['Đà Nẵng', 'Sài Gòn', 'Hà Nội'];
  register: FormGroup;

  // password: FormGroup;

  constructor() {
    this.register = new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        cfPassword: new FormControl('', [Validators.required]),
        country: new FormControl(null, [Validators.required]),
        age: new FormControl('', [Validators.required, this.checkAge]),
        gender: new FormControl(null, [Validators.required]),
        phone: new FormControl(null, [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
      },
      [this.mustMatch('password', 'cfPassword')]
    );
  }

  ngOnInit(): void {
  }

  checkAge(control: AbstractControl) {
    const age = control.value;
    if (age < 18) {
      return {underage: true};
    }
    return null;
  }

  mustMatch(password: string, confirmPassword: string) {
    return (form: AbstractControl) => {
      const passwordValue = form.get(password)?.value;
      const confirmPasswordValue = form.get(confirmPassword)?.value;

      if (passwordValue !== confirmPasswordValue) {
        return {passwordError: true};
      }
      return null;
    };
  }

  onSubmit() {
    console.log('Email: ' + this.register.controls.email.value);
    console.log('password: ' + this.register.controls.password.value);
    console.log('cfPassword: ' + this.register.controls.cfPassword.value);
    console.log('country: ' + this.register.controls.country.value);
    console.log('gender: ' + this.register.controls.gender.value);
  }
}
