import { FormGroup } from "@angular/forms";
import { Component } from "@angular/core";

@Component ({
    selector: 'form-input',
    styleUrls: [],
    template: `  
    <div [hidden] = "true" class="alert alert-primary" role="alert">
        {{controlConfig.text}}
    </div>
    `
}) export class FormAlertComponent {
    controlConfig;
    formGroup: FormGroup;
    age: number;

    showCondtion () {
        return this.controlConfig.showCondition != '' && eval(this.controlConfig.showCondition);
    }
}
