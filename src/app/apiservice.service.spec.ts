import { TestBed } from '@angular/core/testing';

import { LoginserviceService } from './apiservice.service';

describe('LoginserviceService', () => {
  let service: LoginserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
