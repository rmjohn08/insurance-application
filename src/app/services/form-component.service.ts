import { Injectable } from '@angular/core';
import { ControlModel, ControlModelResponse } from '../model/control-model';
import { QuestionsService } from './questions.service';
import { Observable } from 'rxjs';

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
  private errorMessage : any;
  
  constructor(private questionsService: QuestionsService ) {
      //this.loadComponentModels(); 
      //this.componentModels[this.APPLICANT_NAME] = this.applicantNameModel;
      //this.componentModels[this.DOMESTIC_ADDRESS] = this.domesticAddress;
      //... more models
  }

    /*
    .map(
      (resp: ControlModelResponse) => { 
        if (resp) {
          console.log("Question number:" + resp.controls);
          this.componentModels[resp.name] = resp.controls;
          return resp;

        } else {
          console.log("No Control Models found. ");
          return null;
        }

      },
      error => {
        this.errorMessage = <any>error
        console.log (this.errorMessage);
        return null;
      }
    );  
    */
  
  getControlsByComponentName(name:string): ControlModel[] {
    return this.componentModels[name];
  }

  addComponentModel(name:string, con:ControlModel) {
    console.log("Adding " + name + " : "+ con );
    this.componentModels[name] = con;
  }

  // done at application start
  loadComponentModels(): Promise<any> {
    return new Promise((resolve,reject) => {
      this.questionsService.getControlModels("")
      .toPromise()
      .then(
        (result:ControlModelResponse) => {
        var id = 0;
        while(result[id]) {
            this.addComponentModel(result[id].name,result[id].controls)
            id++;
        }
        resolve(true);
      }).catch(this.handleError());

    });
  }

  private handleError(data?:any) {
    return (error: any) => {
      console.log(error);
    }
  }

  getComponentModel(component:string): Observable<ControlModel> { 
    return this.questionsService.getControlModels(component)
    .map(
      (resp: ControlModelResponse) => { 
        if (resp) {
          /*this.questionsResults.forEach(element => {
            console.log("Question number:" + element.number +  " name:" + element.name);
          });*/
          return resp;

        } else {
          console.log("No Control Models found. ");
          return null;
        }

      },
      error => {
        this.errorMessage = <any>error
        console.log (this.errorMessage);
        return null;
      }
    );
    
  }

}
