import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MutualFundService} from './mutual-fund.service';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-update-fund',
  templateUrl: './update-fund.component.html',
  styleUrls: ['./update-fund.component.css']
})
export class UpdateFundComponent implements OnInit {
 
  myForm: FormGroup; 
  fundFamily: FormControl;
  fundName: FormControl;
  fundCategory: FormControl;
  fundType: FormControl;
  assets: FormControl;
  expense: FormControl;
  subscriptionType: FormControl;
  currentNav: FormControl;
  fundRating: FormControl;
  firstYrReturn: FormControl;
  thirdYrReturn: FormControl;
  fifthYrReturn: FormControl;
  folioNo: FormControl;
  accountNo: FormControl;
  sipStartDt: FormControl;
  sipEndDt: FormControl;
  emiDay: FormControl;
  firstAmount: FormControl;
  monthlyAmount: FormControl;
  investedAmount: FormControl;
  currentUnit: FormControl;
  currentMarketValue: FormControl;
  currentgainLoss: FormControl;
  currentPercentReturn: FormControl;
  transactionDt: FormControl;
  transactionAmount: FormControl;
  navValue: FormControl;
  purchaseUnit: FormControl;
  
  fundFamilies: string[] = ['Axis','Birla Sun Life','BNP Paribus','DSP Black Rock','Franklin Templeton','HDFC','HSBC','ICICI Prudential','IDFC','Invesco','Kotak Mahindra','Mirae Asset','SBI','UTI'];
  categories:string[] = ['Equity:Large Cap','Equity:Mid Cap','Equity:Small cap','Equity:Multi Cap','Equity: Tax Planning','Hybrid: Equity-oriented'];
  fTypes: string[] = ['Direct - Growth','Direct - Dividend', 'Regular - Growth', 'Regular - Dividend'];
  
  

  constructor(private mfService: MutualFundService) { 
    this. categories = ['Equity:Large Cap','Equity:Mid Cap','Equity:Small cap','Equity:Multi Cap','Equity: Tax Planning','Hybrid: Equity-oriented'];

  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  
  }


  createFormControls() {
      this.fundFamily = new FormControl('',Validators.required);
      this.fundName = new FormControl('',Validators.required);
      this.fundCategory = new FormControl('',Validators.required);
      this.fundType = new FormControl('',Validators.required);
      this.assets =  new FormControl('', [Validators.required, Validators.pattern("^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$")]);
      this. expense = new FormControl('', [Validators.required, Validators.pattern("^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$")]);
      this.subscriptionType = new FormControl('',Validators.required);
      this.currentNav = new FormControl('', [Validators.required, Validators.pattern("^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$")]);
      this.fundRating = new FormControl('', [Validators.required, Validators.pattern("^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$")]);
      this.firstYrReturn = new FormControl('', [Validators.required, Validators.pattern("^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$")]);
      this.thirdYrReturn = new FormControl('', [Validators.required, Validators.pattern("^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$")]);
      this.fifthYrReturn = new FormControl('', [Validators.required, Validators.pattern("^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$")]);
      this.folioNo = new FormControl('',Validators.required);
      this.accountNo = new FormControl('',Validators.required);
      this.sipStartDt = new FormControl('',Validators.required);
      this.sipEndDt = new FormControl('',Validators.required);
      this.emiDay = new FormControl('',Validators.required);
      this.firstAmount = new FormControl('', [Validators.required, Validators.pattern("^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$")]);
      this.monthlyAmount = new FormControl('', [Validators.required, Validators.pattern("^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$")]);
      this.investedAmount = new FormControl('', [Validators.required, Validators.pattern("^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$")]);
      this.currentUnit = new FormControl('', [Validators.required, Validators.pattern("^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$")]);
      this.currentMarketValue = new FormControl('', [Validators.required, Validators.pattern("^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$")]);
      this.currentgainLoss = new FormControl('', [Validators.required, Validators.pattern("^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$")]);
      this.currentPercentReturn = new FormControl('', [Validators.required, Validators.pattern("^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$")]);
      this.transactionDt = new FormControl('',Validators.required);
      this.transactionAmount = new FormControl('', [Validators.required, Validators.pattern("^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$")]);
      this.navValue = new FormControl('', [Validators.required, Validators.pattern("^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$")]);
      this.purchaseUnit = new FormControl('', [Validators.required, Validators.pattern("^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$")]);
  }



  createForm() {
      this.myForm = new FormGroup({
        fund: new FormGroup({
          fundFamily: this.fundFamily,
          fundName: this.fundName,
          fundCategory: this.fundCategory,
          fundType: this.fundType,
          assets: this.assets,
          expense: this.expense,
          subscriptionType: this.subscriptionType,
          currentNav: this.currentNav,
          fundRating: this.fundRating,
          firstYrReturn: this.firstYrReturn,
          thirdYrReturn: this.thirdYrReturn,
          fifthYrReturn: this.fifthYrReturn,
          folioNo: this.folioNo,
          accountNo: this.accountNo,
          sipStartDt: this.sipStartDt,
          sipEndDt: this.sipEndDt,
          emiDay: this.emiDay,
          firstAmount: this.firstAmount,
          monthlyAmount: this.monthlyAmount,
          investedAmount: this.investedAmount,
          currentUnit: this.currentUnit,
          currentMarketValue: this.currentMarketValue,
          currentgainLoss: this.currentgainLoss,
          currentPercentReturn: this.currentPercentReturn
        }),
          transaction: new FormGroup({
          transactionDt: this.transactionDt,
          transactionAmount: this.transactionAmount,
          navValue: this.navValue,
          purchaseUnit: this.purchaseUnit
        })

    });
  }

  formSubmit() {

  }

}
