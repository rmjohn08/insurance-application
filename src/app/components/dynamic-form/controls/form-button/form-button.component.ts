import { FormGroup } from "@angular/forms";
import { Component } from "@angular/core";

@Component ({
    selector: 'form-button',
    styleUrls: [],
    template : `
    <div 
    class="dynamic-field form-button">
    <button mat-button type="submit">
      {{ controlConfig.label }}
    </button>
    </div>
    `
}) export class FormButtonComponent {
    controlConfig;
    formGroup: FormGroup;
}