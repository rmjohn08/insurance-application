import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { QuoteModel } from '../../model/quote-model';
import { QuoteService } from '../../services/quote.service';

@Component({
  selector: 'app-quote-results',
  templateUrl: './quote-results.component.html',
  styleUrls: ['./quote-results.component.css']
})
export class QuoteResultsComponent implements OnInit {
  @Output("selectedPremium") selectedPremium = new EventEmitter<QuoteModel>();
  @ViewChild('result') resultEl:ElementRef;
  
  quoteResults: QuoteModel[];
  hasQuotes = false;
  selectedQuote: QuoteModel;
  
  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    
  }
  
  searchStart() {
    this.hasQuotes = false;
    this.selectedQuote = new QuoteModel();
  }

  foundQuotes(quotes: QuoteModel[]) {
    if (quotes) {
      this.resultEl.nativeElement.class='show';
      this.hasQuotes = true;
      this.quoteResults = quotes;
    }
  }

  selectPremium(selectedResult) {
    //this.selectedPremium.emit(selectedResult);
    this.selectedQuote = selectedResult;

  }

}
