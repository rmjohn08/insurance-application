import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlModel } from '../model/control-model';

@Injectable()
export class FormControlValidatorService {

  constructor() { }

  setupFormGroupControls(stepControl:FormGroup, controls:ControlModel[]) {
    Array.from(controls).forEach(ctrl => {
      stepControl.addControl(ctrl.name, new FormControl('', this.setValidators(ctrl)));
    });
  }

  
  setValidators(it):any {
    let validators = [];

    if (it.required || it.required=='true') {
      validators.push(Validators.required);
    }
    if (it.regex && it.regex != '') {
      validators.push(Validators.pattern(it.regex))
    }
    if (it.validator) {
      validators.push(it.validator)
    }
    if (validators.length>0)
      return validators;
    else 
      return null;
  }

}
