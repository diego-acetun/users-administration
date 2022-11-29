import { FormControl, ValidationErrors } from '@angular/forms';

export class Validations {
  static validateSpecialCharacters(
    control: FormControl
  ): ValidationErrors | null {
    const caracteresEspeciales = ['#', '$', '&', '@'];
    for (let i = 0; i <= caracteresEspeciales.length; i++) {
      if (control.value.includes(caracteresEspeciales[i])) return null;
    }
    return { specialCharacters: true };
  }

  static validateUpperCase(control: FormControl): ValidationErrors | null {
    const letrasMayusculas = 'ABCDEFGHYJKLMNÑOPQRSTUVWXYZ';
    for (let i = 0; i <= letrasMayusculas.length; i++) {
      if (control.value.includes(letrasMayusculas[i])) return null;
    }
    return { upperCase: true };
  }

  static validateEndDotCom(control: FormControl): ValidationErrors | null {
    if (control.value.endsWith('.com')) return null;
    return { endsDotCom: true };
  }
}
