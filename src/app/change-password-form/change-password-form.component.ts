import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: [ './change-password-form.component.css' ]
})
export class ChangePasswordFormComponent {
  form = new FormGroup(
    {
      oldPassword: new FormControl('', Validators.required, PasswordValidators.invalidOldPassword),
      password: new FormControl('', Validators.required),
      cPassword: new FormControl('', Validators.required)
    },
    PasswordValidators.passwordsShouldMatch
  );

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get password() {
    return this.form.get('password');
  }

  get cPassword() {
    return this.form.get('cPassword');
  }

  login() {
    // console.log('this.form.errors', this.form.errors);
  }
}
