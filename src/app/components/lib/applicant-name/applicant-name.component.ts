import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { INVALID } from '@angular/forms/src/model';
import { FormComponentService } from '../../../services/form-component.service';
import { ControlModel } from '../../../model/control-model';

@Component({
  selector: 'app-applicant-name',
  templateUrl: './applicant-name.component.html',
  styleUrls: ['./applicant-name.component.css']
})
export class ApplicantNameComponent implements OnInit {
  private controls: ControlModel[];

  @Input("stepControl") stepControl: FormGroup;
  @Output("formChanges") formChanges = new EventEmitter<String>();
  
  constructor(private componentService: FormComponentService) { }

  ngOnInit() {
    this.controls = this.componentService.getComponentModel(this.componentService.APPLICANT_NAME);
    if (this.controls && this.controls.length > 0) {
      this.setupFormGroupControls();
      this.onChanges();
    } else {
      console.log('Control model was not found. There is a problem with componentService');
    }
  }

  setupFormGroupControls() {
    Array.from(this.controls).forEach(ctrl => {
      this.stepControl.addControl(ctrl.name, new FormControl('',this.setValidators(ctrl)));
    });
  }

  // this subscribe a listener for changes on all fields in form
  onChanges() {
    this.stepControl.valueChanges.subscribe(val => {
      console.log('change ' + (val.firstName || val.lastName ||  val.middleName ? "good":"nope"));
    });
  }

  setValidators(it):any {
    let validators = [];

    if (it.required || it.required=='true') {
      validators.push(Validators.required);
    }
    if (it.regex && it.regex != '') {
      validators.push(Validators.pattern(it.regex))
    }
    if (it.validator) {
      validators.push(it.validator)
    }
    if (validators.length>0)
      return validators;
    else 
      return null;
  }

}
