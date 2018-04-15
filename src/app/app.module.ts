import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatFormFieldModule } from '@angular/material';
import { MatStepperModule } from  '@angular/material/stepper';
import { StepComponentComponent } from './components/step-component/step-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuoteZipcodeComponent,
    QuoteResultsComponent,
    QuoteSelectionComponent,
    QuoteMainComponent,
    StepComponentComponent
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
    MatFormFieldModule
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
