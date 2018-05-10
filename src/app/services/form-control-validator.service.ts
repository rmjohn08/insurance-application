import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlModel } from '../model/control-model';

@Injectable()
export class FormControlValidatorService {
  private customValidators = [];

  constructor() { 
    this.customValidators['canQuoteState'] = canQuoteState;
  }

  setupFormGroupControls(stepControl:FormGroup, controls:ControlModel[]) {
    Array.from(controls).forEach(ctrl => {
      stepControl.addControl(ctrl.name, new FormControl('', this.setValidators(ctrl)));
    });
  }
  
  setValidators(it):any {
    let validators = [];

    if (it.required || it.required == 'true') {
      validators.push(Validators.required);
    }
    if (it.regex && it.regex != '') {
     let reg: string = it.regex;
     
      validators.push(Validators.pattern(reg))
    }
    if (it.max && it.max != '') {
      validators.push(Validators.max(it.max))
    }
    if (it.inputType && it.inputType == 'email') {
      validators.push(Validators.email)
    }
    if (it.validator) { //<= add as many as needed
      validators.push(this.customValidators[it.validator]);
    }
    if (validators.length>0)
      return validators;
    else 
      return null;
  }
}

function isOnlist(control: FormControl) {
  //control.value. //controlQuestion.value.controls
}
function availableOnList(control: FormControl, list: any[], val: any) {
  var isQuotable = Array.from(list).includes(val);
  if (isQuotable) {
    return null;
  } else {
    return { validStates: val.toString};
  }

}

function canQuoteState(control: FormControl) {
  let states = ['NE','IA','SD','GA','FL']; 
  let state = control.value;
  var isQuotable = Array.from(states).includes(state);
  if (isQuotable) {
    return null;
  } else {
    return { validStates: states.toString};
  }

}
