import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header.component';
import { ContactPersonComponent } from './contacts/contact-person.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './main/home.component';
import { MfassetsComponent } from './mfassets/mfassets.component';
import { MutualFundService} from './mfassets/mutual-fund.service';
import { ChartService} from './charts/chart.service';
import { ViewFundsComponent } from './mfassets/view-funds.component';
import { FundDetailComponent } from './mfassets/fund-detail.component';
import { AddFundTransactionComponent } from './mfassets/add-fund-transaction.component';
import { FundCategoryInvestmentChartComponent } from './charts/fund-category-investment-chart.component';
import { ChartsModule } from 'ng2-charts';
import { MyDatePickerModule } from 'mydatepicker';
import { ModalComponent } from './common/modal.component';
import { ModalService } from './common/modal.service';
import { UpdateFundComponent } from './mfassets/update-fund.component';
import { UserRegistrationComponent } from './shared/user-registration.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'viewFund', component: ViewFundsComponent},
  { path: 'addFund', component: MfassetsComponent},
  { path: 'fundDetails/:id', component: FundDetailComponent},
  { path: 'addFundTransaction/:id', component: AddFundTransactionComponent},
  { path: 'updateFund/:id', component: UpdateFundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactPersonComponent,
    ContactsComponent,
    HomeComponent,
    MfassetsComponent,
    ViewFundsComponent,
    FundDetailComponent,
    AddFundTransactionComponent,
    FundCategoryInvestmentChartComponent,
    ModalComponent,
    UpdateFundComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule,
    MyDatePickerModule
  ],
  providers: [MutualFundService, ChartService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
