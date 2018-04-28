import {NG_VALIDATORS, FormControl, Validator, ValidatorFn} from '@angular/forms';
import { Directive } from '@angular/core';
/**
 * this is a directive that can be applied in a template driven form.  
 * works with [(ngModel)].  doesnt seems to work well with model driven
 */
@Directive({
    selector: '[quotablestate]',
    providers: [
        {
        provide: NG_VALIDATORS,
        useValue: CanQuoteStateValidator,
        multi: true
        }
    ]
})
export class CanQuoteStateValidator implements Validator {
    validator: ValidatorFn;

    constructor() {
        this.validator = this.canQuoteState();
    }
    
    validate(control: FormControl) {
        return this.validator(control);
    }

    canQuoteState(): ValidatorFn { 
        return (control:FormControl) => {
            let states = ['NE','IA','SD','GA','FL']; 
            let state = control.value;
            var isQuotable = Array.from(states).includes(state);
            if (isQuotable) {
            return null;
            } else {
            return { 
                canQuoteState: {
                    valid: false
                    }
                };
            }
        }
    }

}