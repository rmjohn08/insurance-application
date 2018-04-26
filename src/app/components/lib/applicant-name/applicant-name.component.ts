/**
 * this represents a applicant-name 
 */
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { INVALID } from '@angular/forms/src/model';
import { FormComponentService } from '../../../services/form-component.service';
import { ControlModel, ControlModelResponse } from '../../../model/control-model';
import { FormControlValidatorService } from '../../../services/form-control-validator.service';

@Component({
  selector: 'app-applicant-name',
  templateUrl: './applicant-name.component.html',
  styleUrls: ['./applicant-name.component.css']
})
export class ApplicantNameComponent implements OnInit {
  private controls: ControlModel[];

  @Input("stepControl") stepControl: FormGroup;
  // this can be used to emit changes and communicate up the component chain (a parent component)
  @Output("formChanges") formChanges = new EventEmitter<String>();
  
  constructor(private componentService: FormComponentService, 
      private controlValidatorService: FormControlValidatorService) { 

  }

  ngOnInit() {
    /*this.componentService.getComponentModel(this.componentService.APPLICANT_NAME)
    .subscribe( (result:ControlModelResponse) => {
       var id = 0;
       while(result[id]) {
          this.controls = result[id].controls;
          id++;
       }
       
        if (this.controls) {
          this.setupFormGroupControls();
        } else {
          console.log("Control Model " + this.componentService.APPLICANT_NAME + " not found.");
        }

    });
    */
    this.controls = this.componentService.getControlsByComponentName(this.componentService.APPLICANT_NAME);
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
