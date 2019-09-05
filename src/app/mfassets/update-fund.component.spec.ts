import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFundComponent } from './update-fund.component';

describe('UpdateFundComponent', () => {
  let component: UpdateFundComponent;
  let fixture: ComponentFixture<UpdateFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
