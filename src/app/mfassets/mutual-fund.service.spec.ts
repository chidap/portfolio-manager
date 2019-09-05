/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MutualFundService } from './mutual-fund.service';

describe('MutualFundService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MutualFundService]
    });
  });

  it('should ...', inject([MutualFundService], (service: MutualFundService) => {
    expect(service).toBeTruthy();
  }));
});
