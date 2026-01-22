import { Directive, input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[minDate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinDate, multi: true }],
})
export class MinDate implements Validator {
  minDate = input.required<string>();

  validate(control: AbstractControl): ValidationErrors | null {
    if(control.value && this.minDate() && control.value < this.minDate()) {
      return { minDate: true };
    }

    return null;
  }
}
