import { Injectable } from '@angular/core';
import { QuoteModel } from '../model/quote-model';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class QuoteService {

  private url: string;

  // an array of quote models
  private quotes: QuoteModel[];
  constructor(private http: Http) { 

    this.initializeMockQuotes();
    this.url = "https://my-json-server.typicode.com/rmjohn08/InLinerOrder/quotes/";
  }

  private initializeMockQuotes() {

    this.quotes =  [
      new QuoteModel({zipcode:"68116",premium: 200.00, planName: "Plan A", planDescription:"djkjdkljk skjks"}),
      new QuoteModel({zipcode:"68116",premium: 110.00, planName: "Plan B", planDescription:"djkjdkljk skjks"}),
      new QuoteModel({zipcode:"68116",premium: 90.00, planName: "Plan D", planDescription:"djkjdkljk skjks"}),
      new QuoteModel({zipcode:"68136",premium: 205.00, planName: "Plan A", planDescription:"djkjdkljk skjks"}),
      new QuoteModel({zipcode:"68136",premium: 115.00, planName: "Plan B", planDescription:"djkjdkljk skjks"}),
      new QuoteModel({zipcode:"68136",premium: 95.00, planName: "Plan D", planDescription:"djkjdkljk skjks"}),
      new QuoteModel({zipcode:"68116",premium: 49.00, planName: "Plan F", planDescription:"djkjdkljk skjks"}),
    ]
  }
  
  getQuote (zipCode: string) {
      return this.http.get(this.url+ '?zipcode=' + zipCode)
      .map(this.extractData)
      .catch(this.handleError);
    
    }

  private extractData(res:Response) {
        let body = res.json();
        return body || [];
  }

  private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
  }

  /* this is the old method 
    return this.quotes.filter (x => x.zipcode === zipCode );
  */

  quotesFound() {
    return this.quotes && this.quotes.length>0;
  }

}
