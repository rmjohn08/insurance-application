import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { QuoteService } from '../../services/quote.service';
import { QuoteModel } from '../../model/quote-model';

@Component({
  selector: 'app-quote-zipcode',
  templateUrl: './quote-zipcode.component.html',
  styleUrls: ['./quote-zipcode.component.css']
})
export class QuoteZipcodeComponent implements OnInit {

  errorMessage:any;
  quoteResults: QuoteModel[];
  constructor(private quoteService: QuoteService) { 

  }

  @Output("quotesFound") quotesFound = new EventEmitter<QuoteModel[]>();
  @Output("searchStarted") searchStarted = new EventEmitter();
  @ViewChild('findZip') zipEl:ElementRef;

  private findZip = "";
  
  ngOnInit() {
  }

  

  getQuotes(zip) {
    this.searchStarted.emit();
    this.quoteService.getQuote(zip)
      .subscribe(
        resp => { 
          this.quoteResults = resp;
          if (this.quoteResults) {
            this.quoteResults.forEach(element => {
              console.log("Quote " + element.zipcode +  " " + element.planName);
            });
            this.quotesFound.emit(this.quoteResults);
            
          } else {
            console.log("No Quotes found. ");
          }

        },
        error => this.errorMessage = <any>error);        
  }

}
