import { FormGroup } from "@angular/forms";
import { Component } from "@angular/core";

@Component ({
    selector: 'form-input',
    styleUrls: [],
    template: `
        <div class="dynamic-field form-input">
        <mat-form-field class="control-full-width">
            here a select
        </mat-form-field>
        </div>
    `
}) export class FormSelectComponent {
    controlConfig;
    formGroup: FormGroup;
}