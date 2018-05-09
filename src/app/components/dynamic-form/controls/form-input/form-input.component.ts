import { FormGroup } from "@angular/forms";
import { Component } from "@angular/core";

@Component ({
    selector: 'form-input',
    styleUrls: [],
    template: `
        <div class="dynamic-field form-input" [formGroup] = "formGroup">
        <mat-form-field >
            <input matInput placeholder = "{{controlConfig.placeHolder}}" 
                [type] = "controlConfig.inputType != 'text' ? controlConfig.inputType : 'text' "
                #{{controlConfig.name}}
                [formControlName] = "controlConfig.name"
                title = "{{controlConfig.label}}"
                [maxlength] = "controlConfig.maxlength"
                >
            <mat-hint *ngIf = "controlConfig.hint && controlConfig.hint != ''" align="end">{{controlConfig.hint}}</mat-hint>
        </mat-form-field>
        </div>
    `
}) export class FormInputComponent {
    controlConfig;
    formGroup: FormGroup;
}

// ways of changing width
// [style.width.px] = "10"
//[class] = "controlConfig.classStyles"
// the underline needs to change... 