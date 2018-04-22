import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-quote-main',
  templateUrl: './quote-main.component.html',
  styleUrls: ['./quote-main.component.css']
})
export class QuoteMainComponent implements OnInit {
  private numbers;
  private numberSteps: number = 0;
  frmStep: FormControl;
  private myGroups;
  private questionsResults;
  private errorMessage: any;

  constructor(private formBuilder: FormBuilder,
     private questionsService: QuestionsService) { 
    
  }

  ngOnInit() {
    
    // 
    /*this.myGroups = controls.map( (it) => {
      return this.formBuilder.group({
        completed: ['', Validators.required]
      });
    });*/
    console.info('Done setting up controllers...');
    this.getQuestions();

  }

  getQuestions () {
    // this.searchStarted.emit();
    this.questionsService.getQuestions()
      .subscribe(
        resp => { 
          this.questionsResults = resp;
          if (this.questionsResults) {
            this.questionsResults.forEach(element => {
              console.log("Question number:" + element.number +  " name:" + element.name);
            });
            this.initializeQuestionForms(this.questionsResults);
          } else {
            console.log("No Questions found. ");
          }

        },
        error => this.errorMessage = <any>error);        
  }

  initializeQuestionForms(questions) {
    this.numberSteps = questions.length;
    this.myGroups = new Array<FormGroup>();
    var i=0;
    this.numbers = Array(this.numberSteps).fill(++i).map((x,i)=>++i); // [1,2,3,4]
    var controls = new Array<FormGroup>(this.numberSteps);
    
    // weird behavior with Array and the version of es5
    // .map in es5 does not seem to work, Array.from.forEach does...
    Array.from(controls).forEach( (it, idx) => {
      //console.info('setting form group...');
      this.setupFormGroup(it, questions[idx]);
    });

  }

  setValidators(it) {
    let validators = [];

    if (it.required=='true') {
      validators.push(Validators.required);
    }
    if (it.regex) {
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
  setupFormGroup(ele: FormGroup, question) {
    // here can create an array of validations
    var formFields = [];
     Array.from(question.controls).forEach((it:any) => {
       var el = {}
       el[it.name] = new FormControl('',this.setValidators(it));
       formFields.push(el);       
    });

    //console.log("setting up elements...")
    ele = this.formBuilder.group({
      //pageValid: ['', Validators.requiredTrue], //<== will be used to determine when valid
      question: [question]                  //<== it represents a question with all data for it
      
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
