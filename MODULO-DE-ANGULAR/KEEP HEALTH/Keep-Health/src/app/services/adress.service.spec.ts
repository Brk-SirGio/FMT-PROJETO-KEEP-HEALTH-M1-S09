import { TestBed } from '@angular/core/testing';

import { AdressService } from './address.service';

describe('AdressService', () => {
  let service: AdressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
