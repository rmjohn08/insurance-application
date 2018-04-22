import { Injectable } from '@angular/core';
import { ControlModel } from '../model/control-model';

@Injectable()
export class FormComponentService {

  private applicantNameModel: ControlModel[] = [
    {   
      "inputType":"text",
	    "label":"First Name",
      "regex":"",
      "required":true,
      "name":"firstName",
      "Key":"UWQ_Applicant_First_Name",
      "text":"",
      "placeHolder":"First Name",
      "classStyles":""
    },
    {   
      "inputType":"text",
	    "label":"Middle Name",
      "regex":"",
      "required":false,
      "name":"middleName",
      "Key":"UWQ_Applicant_Middle_Name",
      "text":"",
      "placeHolder":"Middle Name",
      "classStyles":""
    },
    {   
      "inputType":"text",
	    "label":"Last Name",
      "regex":"",
      "required":true,
      "name":"lastName",
      "Key":"UWQ_Applicant_Last_Name",
      "text":"",
      "placeHolder":"Last Name",
      "classStyles":""
    }
    
  ];

  private componentModels: Map<string, ControlModel> = new Map<string,ControlModel>();
  public APPLICANT_NAME: string = "applicantName";
  constructor() { 
      this.componentModels[this.APPLICANT_NAME]= this.applicantNameModel;
      //... more models

  }

  getComponentModel(component:string): ControlModel[] {
    var model = this.componentModels[component];
    if (model) {
      return model;
    } else {
      return null;
    }
  }

}
