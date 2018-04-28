import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpModule } from '@angular/http';
// these imports are needed for Reactive forms (formControls, formBuilder etc...)
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuoteZipcodeComponent } from './components/quote-zipcode/quote-zipcode.component';
import { QuoteResultsComponent } from './components/quote-results/quote-results.component';
import { QuoteSelectionComponent } from './components/quote-selection/quote-selection.component';
import { QuoteMainComponent } from './components/quote-main/quote-main.component';
import { QuoteService } from './services/quote.service';
// Material Desing imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule,
   MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatStepperModule } from  '@angular/material/stepper';
import { StepComponentComponent } from './components/step-component/step-component.component';
import { QuestionsService } from './services/questions.service';
import { DomesticAddressComponent } from './components/lib/domestic-address/domestic-address.component';
import { IntAddressComponent } from './components/lib/int-address/int-address.component';
import { ApplicantNameComponent } from './components/lib/applicant-name/applicant-name.component';
import { ReplacementComponent } from './components/lib/replacement/replacement.component';
import { MethodPaymentComponent } from './components/lib/method-payment/method-payment.component';
import { ReviewComponent } from './components/lib/review/review.component';
import { BenefitiariesComponent } from './components/lib/benefitiaries/benefitiaries.component';
import { FormComponentService } from './services/form-component.service';
import { FormControlValidatorService } from './services/form-control-validator.service';
import { StepsBuilderComponent } from './components/steps-builder/steps-builder.component';
import { CanQuoteStateValidator } from './components/directives/quotable-state-directive';

export function init_components(componentService: FormComponentService) {
  return() => componentService.loadComponentModels();
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuoteZipcodeComponent,
    QuoteResultsComponent,
    QuoteSelectionComponent,
    QuoteMainComponent,
    StepComponentComponent,
    DomesticAddressComponent,
    IntAddressComponent,
    ApplicantNameComponent,
    ReplacementComponent,
    MethodPaymentComponent,
    ReviewComponent,
    BenefitiariesComponent,
    StepsBuilderComponent,
    CanQuoteStateValidator
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [QuoteService, 
    QuestionsService, 
    FormComponentService, 
    FormControlValidatorService,
    {provide: APP_INITIALIZER, useFactory: init_components, deps: [FormComponentService],multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
