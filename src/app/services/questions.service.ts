import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class QuestionsService {

  private url: string;

  constructor(private http: Http) { 
    this.url = "https://my-json-server.typicode.com/rmjohn08/insurance-application/";
  }

  getQuestions () {
      var collectionUrl = "questions/";
      return this.http.get(this.url + collectionUrl)
      .map(this.extractData)
      .catch(this.handleError);
    
    }
  
  getControlModels(modelName:string) {
    var collection = "controlModels/";
    //+ (modelName && modelName != '' ? "?name=" + modelName : "")
    return this.http.get(this.url + collection)
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

}
