import { Component, OnInit, Input } from '@angular/core';
import { MatStepper } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { VALID, INVALID } from '@angular/forms/src/model';

@Component({
  selector: 'app-step-component',
  templateUrl: './step-component.component.html',
  styleUrls: ['./step-component.component.css']
})
export class StepComponentComponent implements OnInit {
  @Input("completed") completed;
  @Input("stepControl") stepControl: FormGroup;
  @Input("stepper") matStepper: MatStepper;
  controlQuestion;
  constructor() { 

  }

  ngOnInit() {
    
    if (this.stepControl) {
      console.log("Got frmControl!!!")
      this.controlQuestion = this.stepControl.controls['question'];
      console.log(this.controlQuestion); //<== this is a control 
    } else {
      console.log("NO frmControl....")
    }
    if (this.completed) {
      console.log("Got completed!!!!")
      
    } else {
      console.log("NOT completed!!!!")
      this.completed = true;
    }

    
  }

  goNext() {
   // for now just make it valid -- @todo remove this code 
   /* var pv = this.stepControl.controls['pageValid'];
    this.stepControl.patchValue({
      pageValid: true
    })
    console.info(pv.value);
    // 
    */
   if (this.stepControl.status=='VALID') {
      console.log('moving next ...');
      //this.matStepper.next()
   }
  }

  onFormChanges(str:string) {
    if (str) {
      this.stepControl.patchValue({
        pageValid: true
      })
    }
  }

}
