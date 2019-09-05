import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundCategoryInvestmentChartComponent } from './fund-category-investment-chart.component';

describe('FundCategoryInvestmentChartComponent', () => {
  let component: FundCategoryInvestmentChartComponent;
  let fixture: ComponentFixture<FundCategoryInvestmentChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundCategoryInvestmentChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundCategoryInvestmentChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
