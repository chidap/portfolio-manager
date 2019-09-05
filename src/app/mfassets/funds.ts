import {MfTransactions} from './mf-transactions';
export class Funds {
    fundFamily: string;
    fundName: string;
    fundCategory: string;
    fundType: string;
    assets: number;
    expense: number; 
    subscriptionType: string;
    currentNav: number;
    fundRating: number;
    firstYrReturn: number;
    thirdYrReturn: number;
    fifthYrReturn: number;
    folioNo: string;
    accountNo: string;
    sipStartDt: string;
    sipEndDt: string;
    emiDay: string;
    firstAmount: number;
    monthlyAmount: number;
    investedAmount: number;
    currentUnit: number;
    currentMarketValue: number;
    currentgainLoss: number;
    currentPercentReturn: number;
    transactions:MfTransactions[];

    
    
    constructor (
                 fundFamily: string,
                 fundName: string,
                 fundCategory: string,
                 fundType: string,
                 assets: number,
                 expense: number, 
                 subscriptionType: string,
                 currentNav: number,
                 fundRating: number,
                 firstYrReturn: number,
                 thirdYrReturn: number,
                 fifthYrReturn: number,
                 folioNo: string,
                 accountNo: string,
                 sipStartDt: string,
                 sipEndDt: string,
                 emiDay: string,
                 firstAmount: number,
                 monthlyAmount: number,
                 investedAmount: number,
                 currentUnit: number,
                 currentMarketValue: number,
                 currentgainLoss: number,
                 currentPercentReturn: number,
                 transactions:MfTransactions[]
                ) {
                 fundFamily = this.fundFamily;
                 fundName = this.fundName;
                 fundCategory = this.fundCategory;
                 fundType = this.fundType;
                 assets = this.assets;
                 expense = this.expense;
                 subscriptionType= this.fundFamily;
                 currentNav = this.currentNav;
                 fundRating = this.fundRating;
                 firstYrReturn = this.firstYrReturn;
                 thirdYrReturn = this.thirdYrReturn;
                 fifthYrReturn = this.fifthYrReturn;
                 folioNo = this.folioNo;
                 accountNo = this.accountNo;
                 sipStartDt = this.sipStartDt;
                 sipEndDt = this.sipEndDt;
                 emiDay = this.emiDay;
                 firstAmount = this.firstAmount;
                 monthlyAmount =  this.monthlyAmount;
                 investedAmount = this.investedAmount;
                 currentUnit = this.currentUnit;
                 currentMarketValue = this.currentMarketValue;
                 currentgainLoss = this.currentgainLoss;
                 currentPercentReturn = this.currentPercentReturn;
                 transactions = this.transactions;


    }
}
