import { Component, OnInit } from '@angular/core';
//import { NgDataGridModel } from 'angular2-datagrid';
import { Funds } from './funds';
import { MutualFundService } from './mutual-fund.service';
import { Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Router } from '@angular/router';

@Component({
  selector: 'app-view-funds',
  templateUrl: './view-funds.component.html',
  styleUrls: ['./view-funds.component.css']
})
export class ViewFundsComponent implements OnInit {
  mFunds: Funds[];
  constructor( private mFundService: MutualFundService, private router: Router ) { }

  ngOnInit() {
        this.mFundService.getMutualFund()
        .subscribe((res: any)=>{
          this.mFunds = res.mFunds; 
          console.log('Home page fund=',this.mFunds);
          
        },(err)=>{
          console.log(err);
        }
        );

  }

  viewDetails(id: string) {
      this.router.navigate(['/fundDetails/' + id]);
  }

  updateFund(id: string) {
      this.router.navigate(['/updateFund/' + id]);
  }

 

}
