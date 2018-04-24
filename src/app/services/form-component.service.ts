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

  private domesticAddress: ControlModel[] = [
    {   
      "inputType":"text",
	    "label":"Address",
      "regex":"",
      "required":true,
      "name":"address",
      "Key":"UWQ_Applicant_Residence_Address",
      "text":"",
      "placeHolder":"Address",
      "classStyles":""
    },
    {   
      "inputType":"text",
	    "label":"Address 2",
      "regex":"",
      "required":false,
      "name":"address2",
      "Key":"UWQ_Applicant_Residence_Address2",
      "text":"",
      "placeHolder":"Address2",
      "classStyles":""
    },
    {   
      "inputType":"text",
	    "label":"city",
      "regex":"",
      "required":true,
      "name":"city",
      "Key":"UWQ_Applicant_Residence_City",
      "text":"",
      "placeHolder":"City",
      "classStyles":""
    },
    {   
      "inputType":"text",
      "label":"state",
      "regex":"",
      "required":true,
      "name":"state",
      "Key":"UWQ_Applicant_Residence_State",
      "text":"",
      "placeHolder":"State",
      "classStyles":""
    },
    {   
      "inputType":"text",
	    "label":"Zipcode",
      "regex":"",
      "required":true,
      "name":"zipcode",
      "Key":"UWQ_Applicant_Residence_Zipcode",
      "text":"",
      "placeHolder":"Zipcode",
      "classStyles":""
    }
    
  ];

  private componentModels: Map<string, ControlModel> = new Map<string,ControlModel>();
  public APPLICANT_NAME: string = "applicantName";
  public DOMESTIC_ADDRESS: string = "domesticAddress";
  
  constructor() { 
      this.componentModels[this.APPLICANT_NAME] = this.applicantNameModel;
      this.componentModels[this.DOMESTIC_ADDRESS] = this.domesticAddress;
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
