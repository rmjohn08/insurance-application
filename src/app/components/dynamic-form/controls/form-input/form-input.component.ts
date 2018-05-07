import { FormGroup } from "@angular/forms";
import { Component } from "@angular/core";

@Component ({
    selector: 'form-input',
    styleUrls: [],
    template: `
        <div class="dynamic-field form-input" [formGroup] = "formGroup">
        <mat-form-field class="control-full-width">
            <input matInput placeholder = "{{controlConfig.placeHolder}}" 
                [formControlName] = "controlConfig.name"
                title = "{{controlConfig.label}}"
                >
        </mat-form-field>
        </div>
    `
}) export class FormInputComponent {
    controlConfig;
    formGroup: FormGroup;
}
