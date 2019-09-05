import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class ChartService {
  baseURL: string = 'http://localhost:3000/fundGrouping';
  constructor(private http: Http) { }


  getInvestmentByFundCategory() {
        return this.http.get(this.baseURL)
                .map((res: Response) => res.json())
                .catch (this.handleError);
  }

   private handleError(error: any) {
      console.log(error);
      return Observable.throw(error.json());
  }
}
