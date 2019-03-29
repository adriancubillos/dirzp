import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: [ './sign-up-form.component.css' ]
})
export class SignUpFormComponent {
  form = new FormGroup({
    account:
      new FormGroup({
        username:
          new FormControl(
            '',
            [ Validators.required, Validators.minLength(3), UsernameValidators.cannotContainSpace ],
            UsernameValidators.shouldBeUnique
          ),
        password: new FormControl('', Validators.required)
      })
  });

  login() {
    // let isValid = authService.login(this.form.value); //FIXME: if we have a back-end service
    // if (!isValid) {
    this.form.setErrors({
      invalidLogin: true
    });
    // }
  }

  get username() {
    return this.form.get('account.username');
  }
}
