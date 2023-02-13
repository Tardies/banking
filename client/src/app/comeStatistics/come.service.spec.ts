import { TestBed } from '@angular/core/testing';

import { ComeService } from './come.service';

describe('ComeService', () => {
  let service: ComeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
