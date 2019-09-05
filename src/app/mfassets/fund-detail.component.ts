import { Component, OnInit } from '@angular/core';
import { MutualFundService } from './mutual-fund.service';
import { Funds } from './funds';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';
@Component({
  selector: 'app-fund-detail',
  templateUrl: './fund-detail.component.html'
  
})
export class FundDetailComponent implements OnInit {
fund: Funds;
id: string;

  constructor( private mfService: MutualFundService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
                this.id = this.route.snapshot.params['id'];
                console.log(this.id);
                this.mfService.getMutualFundById(this.id)
                  .subscribe((res:any) =>{
                      this.fund = res.mFund;
                      console.log('fund=', this.fund);
                  }, (err)=>{
                      console.log(err);

                  })
            }

addFundTransaction() {
  this.router.navigate(['/addFundTransaction/' + this.id]);

}





}
