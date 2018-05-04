import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { FormInputComponent } from './controls/form-input/form-input.component';
import { FormButtonComponent } from './controls/form-button/form-button.component';
import { FormSelectComponent } from './controls/form-select/form-select.component';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule,
    MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { DynamicFieldDirective } from './dynamic-field.directive';
import { FormStepComponent } from './form-step.component';

@NgModule ({
    imports: [CommonModule, 
        ReactiveFormsModule,
        MatButtonModule,
        MatMenuModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    declarations : [
        DynamicFieldDirective,
        FormInputComponent,
        FormButtonComponent,
        FormSelectComponent,
        FormStepComponent
    ],
    entryComponents : [
        FormButtonComponent,
        FormInputComponent,
        FormSelectComponent,
        FormStepComponent
    ],
    exports: [
        FormStepComponent,
        FormButtonComponent,
        FormInputComponent,
        FormSelectComponent,
        FormStepComponent
    ]
    
})
export class DynamicFormModule {}

