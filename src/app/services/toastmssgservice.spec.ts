import { TestBed } from '@angular/core/testing';

import { Toastmssgservice } from './toastmssgservice';

describe('Toastmssgservice', () => {
  let service: Toastmssgservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Toastmssgservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
