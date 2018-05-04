import { FormGroup } from "@angular/forms";
import { Component } from "@angular/core";

@Component ({
    selector: 'form-input',
    styleUrls: [],
    template: `
        <div class="dynamic-field form-input">
        <mat-form-field class="control-full-width">
            <input matInput placeholder="controlConfig.placeHolder" formControlName="controlConfig.name">
        </mat-form-field>
        </div>
    `
}) export class FormInputComponent {
    controlConfig;
    formGroup: FormGroup;
}