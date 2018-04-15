import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-quote-main',
  templateUrl: './quote-main.component.html',
  styleUrls: ['./quote-main.component.css']
})
export class QuoteMainComponent implements OnInit {
  private numbers;
  private numberSteps: number = 3;
  frmStep: FormControl;
  private myGroups;

  constructor(private formBuilder: FormBuilder) { 
    
  }

  ngOnInit() {
    this.myGroups = new Array<FormGroup>();
    var i=0;
    this.numbers = Array(this.numberSteps).fill(++i).map((x,i)=>++i); // [1,2,3,4]
    var controls = new Array<FormGroup>(this.numberSteps);
    // weird behavior with Array and the version of es5
    // .map in es5 does not seem to work, Array.from.forEach does...
    Array.from(controls).forEach( (it) => {
      //console.info('setting form group...');
      this.setupFormGroup(it);
    });

    // 
    /*this.myGroups = controls.map( (it) => {
      return this.formBuilder.group({
        completed: ['', Validators.required]
      });
    });*/
    console.info('Done setting up controllers...');

  }


  setupFormGroup(ele: FormGroup) {
    //console.log("setting up elements...")
    ele = this.formBuilder.group({
      pageValid: ['', Validators.required]
    })
    this.myGroups.push(ele);
  }

  formGroupControl(idx:number) {
    //console.info("getting formGroup " + idx);
    return this.myGroups ? this.myGroups[idx] : null;

  }

  formGroupCompleted(idx:number) {
    
    return this.myGroups ? this.myGroups[idx].pageValid : false;

  }
}
