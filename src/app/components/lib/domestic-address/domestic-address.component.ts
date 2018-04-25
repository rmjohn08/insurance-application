/*
 * this represents a domestic address component
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormComponentService } from '../../../services/form-component.service';
import { ControlModel, ControlModelResponse } from '../../../model/control-model';
import { FormControlValidatorService } from '../../../services/form-control-validator.service';

@Component({
  selector: 'app-domestic-address',
  templateUrl: './domestic-address.component.html',
  styleUrls: ['./domestic-address.component.css']
})
export class DomesticAddressComponent implements OnInit {

  private controls: ControlModel[];

  @Input("stepControl") stepControl: FormGroup;
  // this can be used to emit changes and communicate up the component chain (a parent component)
  @Output("formChanges") formChanges = new EventEmitter<String>();
  
  constructor(private componentService: FormComponentService,
    private controlValidatorService: FormControlValidatorService) { 

  }

  ngOnInit() {
    this.componentService.getComponentModel(this.componentService.DOMESTIC_ADDRESS)
    .subscribe( (result:ControlModelResponse) => {
        var id = 0;
        while(result[id]) {
          this.controls = result[id].controls;
          id++;
        }
        if (this.controls && this.controls.length > 0) {
          this.setupFormGroupControls();
          //this.onChanges();
        } else {
          console.log('Control model was not found. There is a problem with componentService');
        }
        
    });
    
  }

  setupFormGroupControls() {
    this.controlValidatorService.setupFormGroupControls(this.stepControl, this.controls);
  }

}
