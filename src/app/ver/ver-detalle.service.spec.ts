import { TestBed } from '@angular/core/testing';

import { VerDetalleService } from './ver-detalle.service';

describe('VerDetalleService', () => {
  let service: VerDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
