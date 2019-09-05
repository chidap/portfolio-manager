import { Component, OnInit, ChangeDetectorRef,ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { MfTransactions } from './mf-transactions';
import { Funds } from './funds';
import { MutualFundService } from './mutual-fund.service';
import { ActivatedRoute } from '@angular/router';
import {IMyOptions, IMyDateModel, IMyInputFieldChanged} from 'mydatepicker';

@Component({
  selector: 'app-add-fund-transaction',
  templateUrl: './add-fund-transaction.component.html'
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddFundTransactionComponent implements OnInit {
  myForm: FormGroup;
  transactionDt: FormControl;
  transactionAmount: FormControl;
  navValue: FormControl;
  purchaseUnit: FormControl;
  fund: Funds;
  totalInvestedAmount: number;
  totalUnit: number;
  //allDataFetched: boolean = false;
  noOfTransaction: number =0;
  marketValue:number = 0;
  
  private myDatePickerOptions: IMyOptions = {
        // other options...
        dateFormat: 'yyyy-mm-dd',
        height: '32px',
        width: '260px'
    };



  constructor(private route: ActivatedRoute,  private mfService: MutualFundService ) {
  
   }

   id: string = this.route.snapshot.params['id'];

   createForm() {
          this.myForm = new FormGroup({
          transaction: new FormArray([
         /* new FormGroup({
                transactionDt: this.transactionDt,
                transactionAmount: this.transactionAmount,
                navValue: this.navValue,
                purchaseUnit: this.purchaseUnit
              })*/
       ])

    });

   }

  ngOnInit() {
     //let id = this.route.snapshot.params['id'];
    this.mfService.getMutualFundById(this.id)
        .subscribe((data: any) =>{
            this.fund = data.mFund;
            if(!this.fund) {
              this.fund.currentMarketValue = this.fund.currentNav * this.fund.currentUnit;
            }
           // this.allDataFetched = true;      
        }, (err)=> { 
             console.log(err);
           });
    
    this.createFormControls();
    this.createForm();
   
  }



  createFormControls() {
      this.transactionDt = new FormControl('',Validators.required);
      this.transactionAmount = new FormControl('', [Validators.required, Validators.pattern("^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$")]);
      this.navValue = new FormControl('', [Validators.required, Validators.pattern("^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$")]);
      this.purchaseUnit = new FormControl('', [Validators.required, Validators.pattern("^[+-]?([0-9]*\.?[0-9]+|[0-9]+\.?[0-9]*)([eE][+-]?[0-9]+)?$")]);
  }


  addTransactionControl() {
      this.createFormControls();
      (<FormArray> this.myForm.controls['transaction']).push( new FormGroup({
                transactionDt: this.transactionDt,
                transactionAmount: this.transactionAmount,
                navValue: this.navValue,
                purchaseUnit: this.purchaseUnit


          }));
      if(((<FormArray>this.myForm.get('transaction')).length )>1)
        this.updateFundData();  
        
  }


  onDateChanged(event: IMyDateModel) {
         event.formatted;
         
    }


  updateFundData() {
    
           let index = (<FormArray>this.myForm.get('transaction')).length -2;
           let tranAmount =  (<FormGroup>(<FormArray>this.myForm.get('transaction')).controls[index]).controls['transactionAmount'].value;
           let totUnit = (<FormGroup>(<FormArray>this.myForm.get('transaction')).controls[index]).controls['purchaseUnit'].value;
           this.fund.investedAmount = this.fund.investedAmount + parseFloat(tranAmount);
           this.fund.currentUnit = this.fund.currentUnit + parseFloat(totUnit);
           this.fund.currentMarketValue = this.fund.currentNav * this.fund.currentUnit;
            
  }   

  saveTransaction() {
           let index = (<FormArray>this.myForm.get('transaction')).length -1;
           let tranAmount =  (<FormGroup>(<FormArray>this.myForm.get('transaction')).controls[index]).controls['transactionAmount'].value;
           let totUnit = (<FormGroup>(<FormArray>this.myForm.get('transaction')).controls[index]).controls['purchaseUnit'].value;
           this.fund.investedAmount = this.fund.investedAmount + parseFloat(tranAmount);
           this.fund.currentUnit = this.fund.currentUnit + parseFloat(totUnit);
           this.fund.currentMarketValue = this.fund.currentNav * this.fund.currentUnit;
          
           for(let i in (<FormArray>this.myForm.get('transaction')).controls) {
              let transactionDt = (<FormGroup>(<FormArray>this.myForm.get('transaction')).controls[i]).controls['transactionDt'].value.formatted ;
              let transactionAmount = (<FormGroup>(<FormArray>this.myForm.get('transaction')).controls[i]).controls['transactionAmount'].value;
              let navValue = (<FormGroup>(<FormArray>this.myForm.get('transaction')).controls[i]).controls['navValue'].value;
              let purchaseUnit = (<FormGroup>(<FormArray>this.myForm.get('transaction')).controls[i]).controls['purchaseUnit'].value;
              let transaction = {"transactionDt": transactionDt, "transactionAmount": transactionAmount, "navValue": navValue, "purchaseUnit": purchaseUnit };
              this.fund.transactions.push(transaction);
           }
           this.myForm = new FormGroup({
                  transaction: new FormArray([])

            });
           
           this.mfService.upDateMutualFund(this.id,this.fund)
                  .subscribe((data: any) =>{
                      this.fund = data.mFund;
                      //this.allDataFetched = true;      
                      }, (err)=> { 
                            console.log(err);
                      });





  }               

}
