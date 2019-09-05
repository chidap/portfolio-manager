/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MfassetsComponent } from './mfassets.component';

describe('MfassetsComponent', () => {
  let component: MfassetsComponent;
  let fixture: ComponentFixture<MfassetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfassetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfassetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
