import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuoteZipcodeComponent } from './components/quote-zipcode/quote-zipcode.component';
import { QuoteResultsComponent } from './components/quote-results/quote-results.component';
import { QuoteSelectionComponent } from './components/quote-selection/quote-selection.component';
import { QuoteMainComponent } from './components/quote-main/quote-main.component';
import { QuoteService } from './services/quote.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuoteZipcodeComponent,
    QuoteResultsComponent,
    QuoteSelectionComponent,
    QuoteMainComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
