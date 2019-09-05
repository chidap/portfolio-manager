import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MutualFundService} from './mutual-fund.service';
import { Funds } from './funds';
import { MfTransactions } from './mf-transactions';
import {Observable} from 'rxjs/Rx';
import {IMyOptions, IMyDateModel, IMyInputFieldChanged} from 'mydatepicker';

@Component({
  selector: 'app-mfassets',
  templateUrl: './mfassets.component.html'
  
})
export class MfassetsComponent implements OnInit {
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

  
  mfund: Funds= new Funds('','','','',0,0,'',0,0,0,0,0,'','','','','',0,0,0,0,0,0,0,[]);
  trsansaction: MfTransactions[];
  fundFamilies: string[] = ['Axis','Birla Sun Life','BNP Paribus','DSP Black Rock','Franklin Templeton','HDFC','HSBC','ICICI Prudential','IDFC','Invesco','Kotak Mahindra','Mirae Asset','SBI','UTI'];
  categories:string[] = ['Equity:Large Cap','Equity:Mid Cap','Equity:Small cap','Equity:Multi Cap','Equity: Tax Planning','Hybrid: Equity-oriented'];
  fTypes: string[] = ['Direct - Growth','Direct - Dividend', 'Regular - Growth', 'Regular - Dividend'];
  subsTypes: string[] = ['One Time','SIP'];
  tranDate: string = '';
  startDate: string = '';
  endDate: string = '';
  marketValue:number =0;

  private myDatePickerOptions: IMyOptions = {
        // other options...
        dateFormat: 'yyyy-mm-dd',
        height: '34px',
        width: '260px',
    };
  
  constructor(private mfService: MutualFundService) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  
  }

  createFormControls(){
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

calculateMarketValue() {

  this.marketValue = parseFloat((<FormGroup> this.myForm.controls['fund']).controls['currentNav'].value) * parseFloat((<FormGroup> this.myForm.controls['fund']).controls['currentUnit'].value);
  console.log('market value=',this.marketValue);
}






  onSubmit() {
         
    if(this.myForm.valid) {
      console.log("Form Submitted", this.myForm.value);
       this.fillFormValue(); 
       this.mfService.addMutualFund(this.mfund)
        .subscribe((data)=>console.log(data),
                   (error) => console.log(error) );
    }
    //this.myForm.reset();
  }

  onReset() {
     this.myForm.reset();
  }
 val: string;
  fillFormValue() {
          this.mfund.fundFamily = ((<FormGroup> this.myForm.controls['fund']).controls['fundFamily'].value).toString();
          this.mfund.fundName = (<FormGroup> this.myForm.controls['fund']).controls['fundName'].value;
          this.mfund.fundCategory = (<FormGroup> this.myForm.controls['fund']).controls['fundCategory'].value;
          this.mfund.fundType = (<FormGroup> this.myForm.controls['fund']).controls['fundType'].value;
          this.mfund.assets = (<FormGroup> this.myForm.controls['fund']).controls['assets'].value;
          this.mfund.expense = (<FormGroup> this.myForm.controls['fund']).controls['expense'].value;
          this.mfund.subscriptionType = (<FormGroup> this.myForm.controls['fund']).controls['subscriptionType'].value;
          this.mfund.currentNav = (<FormGroup> this.myForm.controls['fund']).controls['currentNav'].value;
          this.mfund.fundRating = (<FormGroup> this.myForm.controls['fund']).controls['fundRating'].value;
          this.mfund.firstYrReturn = (<FormGroup> this.myForm.controls['fund']).controls['firstYrReturn'].value;
          this.mfund.thirdYrReturn = (<FormGroup> this.myForm.controls['fund']).controls['thirdYrReturn'].value;
          this.mfund.fifthYrReturn = (<FormGroup> this.myForm.controls['fund']).controls['fifthYrReturn'].value;
          this.mfund.folioNo = (<FormGroup> this.myForm.controls['fund']).controls['folioNo'].value;
          this.mfund.accountNo = (<FormGroup> this.myForm.controls['fund']).controls['accountNo'].value;
          this.mfund.sipStartDt = this.startDate;
          this.mfund.sipEndDt = this.endDate;
          this.mfund.emiDay = (<FormGroup> this.myForm.controls['fund']).controls['emiDay'].value;
          this.mfund.firstAmount = (<FormGroup> this.myForm.controls['fund']).controls['firstAmount'].value;
          this.mfund.monthlyAmount = (<FormGroup> this.myForm.controls['fund']).controls['monthlyAmount'].value;
          this.mfund.investedAmount = (<FormGroup> this.myForm.controls['fund']).controls['investedAmount'].value;
          this.mfund.currentUnit = (<FormGroup> this.myForm.controls['fund']).controls['currentUnit'].value;
          this.mfund.currentMarketValue = (<FormGroup> this.myForm.controls['fund']).controls['currentMarketValue'].value;
          this.mfund.currentgainLoss = (<FormGroup> this.myForm.controls['fund']).controls['currentgainLoss'].value;
          this.mfund.currentPercentReturn = (<FormGroup> this.myForm.controls['fund']).controls['currentPercentReturn'].value;
          this.mfund.transactions = [new MfTransactions( this.tranDate,
                                                        (<FormGroup> this.myForm.controls['transaction']).controls['transactionAmount'].value,
                                                        (<FormGroup> this.myForm.controls['transaction']).controls['navValue'].value,
                                                        (<FormGroup> this.myForm.controls['transaction']).controls['purchaseUnit'].value)];
         
         
  }


  onStartDateChanged(event: IMyDateModel) {
         this.startDate = event.formatted;
         
    }

  onEndDateChanged(event: IMyDateModel) {
         this.endDate = event.formatted;
         
    }
  onTransactionDateChanged(event: IMyDateModel) {
         this.tranDate = event.formatted;
         
    }  
    
 










}
