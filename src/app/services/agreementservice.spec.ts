import { TestBed } from '@angular/core/testing';

import { Agreementservice } from './agreementservice';

describe('Agreementservice', () => {
  let service: Agreementservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Agreementservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
