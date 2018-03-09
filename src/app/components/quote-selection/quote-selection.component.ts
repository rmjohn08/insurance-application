import { Component, OnInit, Input } from '@angular/core';
import { QuoteModel } from '../../model/quote-model';

@Component({
  selector: 'app-quote-selection',
  templateUrl: './quote-selection.component.html',
  styleUrls: ['./quote-selection.component.css']
})
export class QuoteSelectionComponent implements OnInit {
  @Input("selectedQuote") selectedQuote : QuoteModel;
  
  premiumSelected: number;
  constructor() { }

  ngOnInit() {
    //
  }

}
