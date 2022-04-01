import { TestBed } from '@angular/core/testing';

import { CheckoutserviceService } from './checkoutservice.service';

describe('CheckoutserviceService', () => {
  let service: CheckoutserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckoutserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
