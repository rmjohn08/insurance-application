import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ControlModel } from '../../model/control-model';
import { FormGroup } from '@angular/forms';
import { FormComponentService } from '../../services/form-component.service';
import { FormControlValidatorService } from '../../services/form-control-validator.service';
//import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';

@Component({
  selector: 'app-form-step',
  templateUrl: './form-step.component.html',
  styleUrls: ['./form-step.component.css']
})
export class FormStepComponent implements OnInit {
    private componentModel: [ControlModel[], string];
    private componentLayout: string;
    private controls: ControlModel[]
  
    @Input("componentName") componentName: string;
    @Input("stepControl") stepControl: FormGroup;
    // this can be used to emit changes and communicate up the component chain (a parent component)
    @Output("formChanges") formChanges = new EventEmitter<String>();
    
    constructor(private componentService: FormComponentService, 
        private controlValidatorService: FormControlValidatorService) { 
  
    }
  
    ngOnInit() {
      [this.controls, this.componentLayout] = this.componentService.getControlsByComponentName(this.componentName);//this.componentService.APPLICANT_NAME);
      this.setupFormGroupControls();
      
    }
  
    setupFormGroupControls() {
      this.controlValidatorService.setupFormGroupControls(this.stepControl, this.controls);
      
    }
  
    // this subscribe a listener for changes on all fields in form
    onChanges() {
      this.stepControl.valueChanges.subscribe(val => {
        console.log('change ' + (val.firstName || val.lastName ||  val.middleName ? "good":"nope"));
      });
    }
  

}
