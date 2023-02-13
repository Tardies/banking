import { TestBed } from '@angular/core/testing';

import { BalanceStatisticsService } from './balance-statistics.service';

describe('BalanceStatisticsService', () => {
  let service: BalanceStatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalanceStatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
