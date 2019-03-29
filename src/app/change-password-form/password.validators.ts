import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
  static invalidOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        control.value === '1234' ? resolve(null) : resolve({ invalidOldPassword: true });
      }, 1000);
    });
  }

  static passwordsShouldMatch(control: AbstractControl): ValidationErrors | null {
    // if ((group.value as string).indexOf(' ') >= 0) return { cannotContainSpace: true };
    const newPassword = control.get('password');
    const confirmPassword = control.get('cPassword');

    if (newPassword.value !== confirmPassword.value) {
      return { passwordsShouldMatch: true };
    }
    return null;
  }
}
