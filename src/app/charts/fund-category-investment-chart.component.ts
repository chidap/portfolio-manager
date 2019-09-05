import { Component, OnInit } from '@angular/core';
import { ChartService } from './chart.service';

@Component({
  selector: 'app-fund-category-investment-chart',
  templateUrl: './fund-category-investment-chart.component.html',
  styleUrls: ['./fund-category-investment-chart.component.css']
})
export class FundCategoryInvestmentChartComponent implements OnInit {
  doughnutChartLabels:string[] = [];
  doughnutChartData:number[] = [];
  doughnutChartType:string = 'doughnut';
  funds: any;
  constructor( private chartService: ChartService) { }

  ngOnInit() {
                this.chartService.getInvestmentByFundCategory()
                    .subscribe((res: any) => {
                      this.funds = res.mFunds;
                      if(this.funds) {
                        for(let i in this.funds) {
                            this.doughnutChartLabels[i] = this.funds[i]._id;
                            console.log('length=', this.doughnutChartLabels[i]);
                            this.doughnutChartData[i] = this.funds[i].investedAmount;
                         }
                      }
                    },(err)=> {
                      console.log(err);
                    });
        }

  //public doughnutChartLabels:string[] = ['Equity:Small cap', 'Equity:Multi Cap'];
  //public doughnutChartData:number[] = [10000, 3000];
  //public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
