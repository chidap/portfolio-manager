export class MfTransactions {
    transactionDt: string;
    transactionAmount: number;
    navValue: number;
    purchaseUnit: number;

    constructor(trnscnDt: string, trnscnAmt: number, navValue: number, prchseUnit: number) {
        this.transactionDt = trnscnDt;
        this.transactionAmount = trnscnAmt;
        this.navValue = navValue;
        this.purchaseUnit = prchseUnit;
    }
}
