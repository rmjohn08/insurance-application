import { FormGroup } from "@angular/forms";
import { Component } from "@angular/core";

@Component ({
    selector: 'form-input',
    styleUrls: [],
    template: `
        <div class="dynamic-field form-input" [formGroup] = "formGroup">
        <mat-form-field class = "{{ controlConfig.classStyles }}">
            <input matInput placeholder = "{{controlConfig.placeHolder}}" 
                #{{controlConfig.name}}
                [formControlName] = "controlConfig.name"
                title = "{{controlConfig.label}}"
                maxlength = "{{controlConfig.maxlength}}"
                >
        </mat-form-field>
        </div>
    `
}) export class FormInputComponent {
    controlConfig;
    formGroup: FormGroup;
}
