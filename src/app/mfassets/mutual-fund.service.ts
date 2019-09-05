import { Injectable } from '@angular/core';
import { Http, Headers, Response,RequestOptions } from '@angular/http';
import { Funds } from './funds';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class MutualFundService {
  //private mFund:Funds;
  baseURL: string = 'http://localhost:3000/mFunds';
  constructor(private http: Http) {}
  
  addMutualFund(mf: Funds) {
    const body = JSON.stringify(mf);
    console.log(body);
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    let options = new RequestOptions({headers: headers});
    return this.http.post('http://localhost:3000/mFunds',body, options)
        .map((data: Response)=> data.json())
        //.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        .catch (this.handleError);
  }

  getMutualFund() {
      return this.http.get(this.baseURL)
         .map(response => response.json())
         .catch (this.handleError);

  }

  getMutualFundById(id: string) {
     // console.log('id = ',id);
      let apiURL = this.baseURL + '/' + id;
      return this.http.get(apiURL)
        .map(response => response.json())
        .catch(this.handleError);
  }

  upDateMutualFund(id: string, mf: Funds) {
    let apiURL = this.baseURL + '/' + id;
    const body = JSON.stringify(mf);
    const headers = new Headers();
    headers.append('Content-Type','application/json');
    let options = new RequestOptions({headers: headers});
    return this.http.patch(apiURL,body,options)
        .map((data: Response) => data.json())
        .catch(this.handleError);
  }

  private handleError(error: any) {
      console.log(error);
      return Observable.throw(error.json());
  }

}
