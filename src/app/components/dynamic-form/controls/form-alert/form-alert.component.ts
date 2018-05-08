import { FormGroup } from "@angular/forms";
import { Component } from "@angular/core";

@Component ({
    selector: 'form-input',
    styleUrls: [],
    template: `  
    <div [hidden] = "formPage.age && formPage.age > 65 ?'none' : 'inherit'" class="alert alert-primary" role="alert">
        {{controlConfig.text}}
    </div>
    `
}) export class FormAlertComponent {
    controlConfig;
    formGroup: FormGroup;
    age: number;
    formPage;

    showCondition () {
        return true; //this.controlConfig.showCondition != '' && eval(this.controlConfig.showCondition);
    }
}
