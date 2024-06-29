import { TestBed } from '@angular/core/testing';

import { ServicoListaService } from './servico-lista.service';

describe('ServicoListaService', () => {
  let service: ServicoListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
