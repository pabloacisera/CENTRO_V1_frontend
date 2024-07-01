import { TestBed } from '@angular/core/testing';

import { NomServiceService } from './nom-service.service';

describe('NomServiceService', () => {
  let service: NomServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
