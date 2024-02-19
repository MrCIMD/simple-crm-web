import { inject, Injectable } from '@angular/core';
import { AbstractControl, FormBuilder } from "@angular/forms";
import { ERROR_MESSAGES } from "@utils/messages";

@Injectable({
  providedIn: 'root'
})
export class FormToolsService {
  public readonly builder: FormBuilder = inject<FormBuilder>(FormBuilder);

  /**
   * Busca el error y retorna una descripción
   * @param control - Controlador
   * @returns string - Descripción del error
   * */
  public checkForErrorsIn(control: AbstractControl): string {
    if (control.hasError('required')) {
      return ERROR_MESSAGES['required']();
    }

    if (control.hasError('minlength')) {
      const error = control.getError('minlength');

      return ERROR_MESSAGES['minLength'](`${error['requiredLength']}`);
    }

    if (control.hasError('maxlength')) {
      const error = control.getError('maxlength');

      return ERROR_MESSAGES['maxLength'](`${error['requiredLength']}`);
    }

    if (control.hasError('min')) {
      return 'Value must be between 1980 and 2020';
    }

    if (control.hasError('min')) {
      return 'Value must be between 1980 and 2020';
    }

    return ''
  }
}
