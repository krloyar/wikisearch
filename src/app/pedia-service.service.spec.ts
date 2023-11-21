import { TestBed } from '@angular/core/testing';

import { PediaServiceService } from './pedia-service.service';

describe('PediaServiceService', () => {
  let service: PediaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PediaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
