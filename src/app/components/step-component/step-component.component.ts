import { Component, OnInit, Input } from '@angular/core';
import { MatStepper } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { VALID } from '@angular/forms/src/model';

@Component({
  selector: 'app-step-component',
  templateUrl: './step-component.component.html',
  styleUrls: ['./step-component.component.css']
})
export class StepComponentComponent implements OnInit {
  @Input("completed") completed;
  @Input("stepControl")stepControl: FormGroup;
  matStepper: MatStepper
  constructor() { }

  ngOnInit() {
    
    if (this.stepControl) {
      console.log("Got frmControl!!!")
    } else {
      console.log("NO frmControl....")
    }
    if (this.completed) {
      console.log("Got completed!!!!")
      
    } else {
      console.log("NOT completed!!!!")
      this.completed = true;
    }

    var pv = this.stepControl.controls['pageValid'];
    this.stepControl.patchValue({
      pageValid: true
    })
    console.info(pv.value);

  }

}
